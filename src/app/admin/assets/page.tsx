"use client";
import { useState, useRef } from "react";
import { useAssets } from "@/hooks/useAssets";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Trash2, Download, Image as ImageIcon, File } from "lucide-react";
import Image from "next/image";

export default function AdminAssetsPage() {
  const { assets, loading, error, uploadAsset, deleteAsset } = useAssets();
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        await uploadAsset(files[i]);
      }
    } catch (err) {
      console.error("Error uploading files:", err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async (asset: any) => {
    if (confirm("Are you sure you want to delete this asset?")) {
      setDeletingId(asset._id);
      try {
        await deleteAsset(asset);
      } catch (err) {
        console.error("Error deleting asset:", err);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <ImageIcon className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const isImage = (type: string) => type.startsWith('image/');

  if (loading) return <div className="p-8">Loading assets...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Asset Management</h1>
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            accept="image/*,video/*,application/*"
          />
          <Button 
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            {uploading ? 'Uploading...' : 'Upload Assets'}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assets.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="p-8 text-center text-gray-500">
              No assets found. Upload your first asset!
            </CardContent>
          </Card>
        ) : (
          assets.map((asset) => (
            <Card key={asset._id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm truncate">{asset.name}</CardTitle>
                    <p className="text-xs text-gray-600 mt-1">
                      {formatFileSize(asset.size)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {getFileIcon(asset.type)}
                    <Badge variant="outline" className="text-xs">
                      {asset.type.split('/')[1]?.toUpperCase() || 'FILE'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {isImage(asset.type) && (
                  <div className="mb-3 relative h-32 bg-gray-100 rounded overflow-hidden">
                    <Image
                      src={asset.url}
                      alt={asset.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    {new Date(asset.uploadedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(asset.url, '_blank')}
                    >
                      <Download className="w-3 h-3" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(asset)}
                      disabled={deletingId === asset._id}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
} 