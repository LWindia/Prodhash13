"use client";
import { useState } from "react";
import { useCourses } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminCoursesPage() {
  const { courses, loading, error, deleteCourse } = useCourses();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      setDeletingId(id);
      try {
        await deleteCourse(id);
      } catch (err) {
        console.error("Error deleting course:", err);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (loading) return <div className="p-8">Loading courses...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <Link href="/admin/courses/new">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Course
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {courses.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              No courses found. Create your first course!
            </CardContent>
          </Card>
        ) : (
          courses.map((course) => (
            <Card key={course._id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{course.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>
                      {course.status || 'draft'}
                    </Badge>
                    <span className="text-sm font-medium text-green-600">
                      {formatPrice(course.price)}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Category: {course.category}</span>
                    <span>Duration: {course.duration}</span>
                    <span>Students: {course.enrolledStudents}</span>
                    <span>Rating: {course.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/courses/${course._id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/courses/${course._id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(course._id!)}
                      disabled={deletingId === course._id}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
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