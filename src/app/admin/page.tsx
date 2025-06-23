"use client";
import Link from 'next/link';
import { useCourses } from '@/hooks/useCourses';
import { useAssets } from '@/hooks/useAssets';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Upload, BookOpen, Image } from 'lucide-react';

export default function AdminHome() {
  const { courses, loading: coursesLoading } = useCourses();
  const { assets, loading: assetsLoading } = useAssets();

  const publishedCourses = courses.filter(course => course.status === 'published').length;
  const draftCourses = courses.filter(course => course.status === 'draft').length;
  const totalAssets = assets.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/admin/courses/new">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Course
            </Button>
          </Link>
          <Link href="/admin/assets">
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload Assets
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coursesLoading ? '...' : courses.length}</div>
            <p className="text-xs text-muted-foreground">
              {publishedCourses} published, {draftCourses} drafts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coursesLoading ? '...' : publishedCourses}</div>
            <p className="text-xs text-muted-foreground">
              {courses.length > 0 ? Math.round((publishedCourses / courses.length) * 100) : 0}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assetsLoading ? '...' : totalAssets}</div>
            <p className="text-xs text-muted-foreground">
              Images, videos, and files
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/admin/courses/new">
              <Button className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Create New Course
              </Button>
            </Link>
            <Link href="/admin/assets">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Manage Assets
              </Button>
            </Link>
            <Link href="/admin/courses">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Courses
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursesLoading ? (
                <p className="text-sm text-muted-foreground">Loading...</p>
              ) : courses.length > 0 ? (
                <div className="space-y-2">
                  {courses.slice(0, 3).map((course) => (
                    <div key={course._id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{course.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {course.status || 'draft'} • {course.category}
                        </p>
                      </div>
                      <Link href={`/admin/courses/${course._id}`}>
                        <Button variant="ghost" size="sm">View</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No courses yet. Create your first course!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 