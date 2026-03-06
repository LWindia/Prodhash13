"use client";

import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OfferLetterForm from './OfferLetterForm';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OfferLetterFormData } from '../../../../types/offerLetter';
import { Input } from '@/components/ui/input';
import HtmlOfferLetter from './HtmlOfferLetter';
import toast, { Toaster } from 'react-hot-toast'; 

// Helper function to format dates
function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

// Helper function to map Google Sheet data to our expected format
function mapSheetDataToFormData(item: any): OfferLetterFormData | null {
  // Skip if this looks like a header row
  if (
    item["Full Name"] === "Full Name" ||
    item["E-mail Id"] === "E-mail Id" ||
    item["College Name"] === "College Name" ||
    item["Domain"] === "Domain" ||
    item["Sr. No."] === "Sr. No." ||
    item["Preferred Batch"] === "Preferred Batch" ||
    item["Status"] === "Status"
  ) {
    return null;
  }

  // Skip empty rows
  if (!item["Full Name"] && !item["E-mail Id"] && !item["College Name"]) {
    return null;
  }

  const normalizedItem: Record<string, any> = {};
  Object.keys(item).forEach(key => {
    normalizedItem[key.toLowerCase().trim()] = item[key];
  });
  
  // Extract Sr. No. from the sheet
  const srNo = parseInt(item["Sr. No."] || item["Sr.No."] || item["Sr No"] || "0");
  
  return {
    fullName: 
      item["Full Name"] || 
      normalizedItem["full name"] || 
      normalizedItem["fullname"] || 
      '',
    email: 
      item["E-mail Id"] || 
      normalizedItem["email"] || 
      '',
    courseTitle: 
      item["Domain"] || 
      normalizedItem["course title"] || 
      normalizedItem["coursetitle"] || 
      '',
    instituteName: 
      item["College Name"] || 
      normalizedItem["institute name"] || 
      normalizedItem["institutename"] || 
      '',
    preferredBatch: 
      item["Preferred Batch"] || 
      normalizedItem["preferred batch"] || 
      normalizedItem["preferredbatch"] || 
      '',
    status: 
      item["Status"] || 
      normalizedItem["status"] || 
      '',
    serialNumber: srNo || undefined
  };
}

export default function OfferLetterGenerator(): JSX.Element {
  const letterRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<OfferLetterFormData | null>(null);
  const [sheetData, setSheetData] = useState<OfferLetterFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [nextSerialNumber, setNextSerialNumber] = useState<number>(1000);
  
  // Fetch data from Google Sheets API
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        
        const response = await fetch('/api/offer-letter-data');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        
        const rawData = await response.json();
        
        // Transform the data and filter out null values (header rows)
        const formattedData = Array.isArray(rawData) 
          ? rawData
              .map(mapSheetDataToFormData)
              .filter((item): item is OfferLetterFormData => item !== null)
          : [];
        
        // Remove duplicates based on email (or email + name combination)
        const uniqueData = formattedData.reduce((acc: OfferLetterFormData[], current) => {
          const duplicate = acc.find(item => 
            item.email === current.email && 
            item.fullName === current.fullName
          );
          if (!duplicate) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        if (uniqueData.length === 0) {
          throw new Error("No data received from API");
        }
        
        // Find the highest serial number from the sheet data
        const maxSerialFromSheet = Math.max(
          ...uniqueData
            .map(item => item.serialNumber || 0)
            .filter(num => num > 0),
          999
        );
        
        setNextSerialNumber(maxSerialFromSheet + 1);
        setSheetData(uniqueData);
      } catch (err) {
        console.error("Error fetching Google Sheets data:", err);
        setError('Error loading data from Google Sheets');
        setSheetData([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Function to update status in Google Sheets
  const updateStatusInSheet = async (email: string, fullName: string, status: string): Promise<boolean> => {
    try {
      console.log('Component - Updating status for:', { email, fullName, status }); // Debug log
      
      const response = await fetch('/api/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          fullName: fullName.trim(),
          status: status.trim()
        }),
      });

      console.log('Component - API response status:', response.status); // Debug log

      const responseData = await response.json();
      console.log('Component - API response data:', responseData); // Debug log

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to update status in sheet');
      }

      if (!responseData.success) {
        throw new Error(responseData.error || 'Update was not successful');
      }

      // Update local state
      setSheetData(prevData => 
        prevData.map(person => 
          person.email === email && person.fullName === fullName
            ? { ...person, status }
            : person
        )
      );

      console.log('Component - Status updated successfully'); // Debug log
      toast.success('Status updated successfully in Google Sheets');
      return true;
    } catch (error) {
      console.error('Component - Error updating status:', error);
      toast.error(`Failed to update status: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  };
  
  // Handle form submission
  const handleSubmit = (data: OfferLetterFormData): void => {
    // Convert the refNumber string to a number for serialNumber
    const dataWithSerial: OfferLetterFormData = {
      ...data,
      serialNumber: data.refNumber ? parseInt(data.refNumber) : nextSerialNumber
    };
    
    // If no refNumber provided, increment the nextSerialNumber
    if (!data.refNumber) {
      setNextSerialNumber(prev => prev + 1);
    }
    
    setFormData(dataWithSerial);
    setError(null);
  };
  
  // Handle selecting a person from the list
  const handleSelectPerson = (person: OfferLetterFormData): void => {
    setFormData(person);
    setError(null);
  };
  
  const handleDownloadPdf = async (): Promise<void> => {
    if (!formData || !letterRef.current) {
      toast.error('Please generate a letter first.');
      return;
    }

    setIsGeneratingPdf(true);
    toast.loading('Generating PDF...');

    try {
      const letterElement = letterRef.current;
      
      // Temporarily make the hidden element visible for capturing
      letterElement.classList.remove('hidden');
      letterElement.style.display = 'block';

      const canvas = await html2canvas(letterElement, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: true,
        allowTaint: true,
        width: letterElement.offsetWidth,
        height: letterElement.offsetHeight,
        windowWidth: letterElement.scrollWidth,
        windowHeight: letterElement.scrollHeight,
      });

      // Hide the element again
      letterElement.style.display = 'none';
      letterElement.classList.add('hidden');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      const fileName = `confirmation-letter-${formData.fullName.replace(/\s+/g, '-')}.pdf`;
      pdf.save(fileName);

      toast.dismiss();
      toast.success('PDF downloaded successfully');
      
      // Update status in Google Sheets
      await updateStatusInSheet(formData.email, formData.fullName, 'Downloaded');

    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.dismiss();
      toast.error('Failed to generate PDF');
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  // This function is now the source of truth for sending emails
  const handleSendEmail = async (): Promise<void> => {
    if (!formData || !letterRef.current) {
      toast.error('Please select a person and generate a letter first.');
      return;
    }

    setIsSendingEmail(true);
    toast.loading('Sending email...');

    try {
      const letterElement = letterRef.current;

      // Temporarily make it visible to capture
      letterElement.classList.remove('hidden');
      letterElement.style.display = 'block';
      
      const canvas = await html2canvas(letterElement, {
        scale: 3,
        useCORS: true,
      });

      // Hide it back
      letterElement.style.display = 'none';
      letterElement.classList.add('hidden');
      
      const pdfBlob = await new Promise<Blob | null>((resolve) => {
        const tempPdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        
        tempPdf.addImage(
          canvas.toDataURL('image/png'), 
          'PNG', 
          0, 
          0, 
          tempPdf.internal.pageSize.getWidth(), 
          tempPdf.internal.pageSize.getHeight()
        );
        
        resolve(tempPdf.output('blob'));
      });

      if (!pdfBlob) {
        throw new Error('Failed to generate PDF blob.');
      }

      const emailFormData = new FormData();
      emailFormData.append('email', formData.email);
      emailFormData.append('fullName', formData.fullName);
      emailFormData.append('pdf', pdfBlob, `Internship-Confirmation-Letter.pdf`);

      const response = await fetch('/api/send-offer-letter', {
        method: 'POST',
        body: emailFormData,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.dismiss();
        toast.success('Email sent successfully!');
        
        // Update status in Google Sheets
        await updateStatusInSheet(formData.email, formData.fullName, 'Sent');
      } else {
        throw new Error(result.error || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.dismiss();
      toast.error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Filter data based on search term
  const filteredData = sheetData.filter(person => 
    (person.fullName && person.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.courseTitle && person.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.instituteName && person.instituteName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.preferredBatch && person.preferredBatch.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.status && person.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="container mx-auto py-10 px-4">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center mb-8">Course Confirmation Letter Generator</h1>
      
      {/* Form Section */}
      {!formData && ( 
        <div className="mb-12">
          <OfferLetterForm onSubmit={handleSubmit} />
        </div>
      )}
      
      {/* Preview & Download Section */}
      {formData && (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Form Submitted Successfully!</h2>
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Preview of your information:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-medium">Name:</span> {formData.fullName}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Institute:</span> {formData.instituteName}</p>
              </div>
              <div>
                <p><span className="font-medium">Course:</span> {formData.courseTitle}</p>
                <p><span className="font-medium">Preferred Batch:</span> {formData.preferredBatch}</p>
                <p><span className="font-medium">Reference No:</span> LWIPL-JPR-2025-{formData.serialNumber}</p>
                <p><span className="font-medium">Status:</span> {formData.status || 'Not Sent'}</p>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf || isSendingEmail}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isGeneratingPdf ? 'Generating PDF...' : 'Download Confirmation Letter'}
            </Button>

            <Button 
              onClick={handleSendEmail}
              disabled={isGeneratingPdf || isSendingEmail}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSendingEmail ? 'Sending Email...' : 'Send via Email'}
            </Button>
            <Button variant="outline" onClick={() => setFormData(null)}>
              Create Another Letter
            </Button>
          </div>
        </div>
      )}
      
      {/* Hidden container with the full-sized letter for PDF generation */}
      {formData && (
        <div className="absolute left-[-9999px] top-[-9999px]">
          <HtmlOfferLetter ref={letterRef} data={formData} />
        </div>
      )}
      
      {/* Google Sheets Data Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Students Data from Google Sheets 
            {sheetData.length > 0 && <span className="text-sm font-normal ml-2">({sheetData.length} records)</span>}
          </CardTitle>
          <div className="mt-2">
            <Input 
              placeholder="Search by name, email, institute, course, preferred batch or status..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-6">Loading data...</div>
          ) : error && filteredData.length === 0 ? (
            <div className="text-center py-6 text-red-500">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr. No.</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Institute Name</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Preferred Batch</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-4">
                        No records found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredData.map((person, index) => {
                      return (
                        <TableRow key={`${person.email}-${index}`}>
                          <TableCell className="font-medium">{person.serialNumber || 'N/A'}</TableCell>
                          <TableCell>{person.fullName || 'N/A'}</TableCell>
                          <TableCell>{person.email || 'N/A'}</TableCell>
                          <TableCell>{person.instituteName || 'N/A'}</TableCell>
                          <TableCell>{person.courseTitle || 'N/A'}</TableCell>
                          <TableCell>{person.preferredBatch || 'N/A'}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              person.status === 'Sent' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {person.status || 'Not Sent'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                onClick={() => handleSelectPerson(person)}
                                disabled={person.status === 'Sent'}
                                className={person.status === 'Sent' ? 'opacity-50' : ''}
                              >
                                {person.status === 'Sent' ? 'Already Sent' : 'Generate Letter'}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}