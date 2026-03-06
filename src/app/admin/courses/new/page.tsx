"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCourses } from "@/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import Link from "next/link";
import { NewCourse } from "../../../../../types/courses";

export default function NewCoursePage() {
  const router = useRouter();
  const { addCourse } = useCourses();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<NewCourse>>({
    title: "",
    slug: "",
    category: "",
    shortDescription: "",
    price: 0,
    originalPrice: 0,
    duration: "",
    hours: "",
    level: "Beginner",
    language: "English",
    status: "draft",
    rating: 0,
    totalRatings: 0,
    enrolledStudents: 0,
    programBy: "",
    paymentLink: "",
    backgroundImage: "",
    certificateImage: "",
    learningOutcomes: [],
    features: [],
    skills: [],
    requirements: [],
    highlights: [],
    module: [],
    programFor: [],
    toolsData: {
      sectionTitle: "",
      category: "",
      toolsCount: "",
      displayImage: "",
      tools: []
    }
  });

  const [newOutcome, setNewOutcome] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newRequirement, setNewRequirement] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addCourse(formData as NewCourse);
      router.push("/admin/courses");
    } catch (error) {
      console.error("Error creating course:", error);
    } finally {
      setLoading(false);
    }
  };

  const addArrayItem = (field: keyof NewCourse, value: string) => {
    if (!value.trim()) return;
    setFormData((prev: Partial<NewCourse>) => ({
      ...prev,
      [field]: [...(prev[field] as string[] || []), value.trim()]
    }));
  };

  const removeArrayItem = (field: keyof NewCourse, index: number) => {
    setFormData((prev: Partial<NewCourse>) => ({
      ...prev,
      [field]: (prev[field] as string[] || []).filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/courses">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Create New Course</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Slug</label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, slug: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, category: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Program By</label>
                <Input
                  value={formData.programBy}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, programBy: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Short Description</label>
              <textarea
                value={formData.shortDescription}
                onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, shortDescription: e.target.value }))}
                className="w-full p-2 border rounded-md"
                rows={3}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pricing & Duration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price ($)</label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, price: Number(e.target.value) }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Original Price ($)</label>
                <Input
                  type="number"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, originalPrice: Number(e.target.value) }))}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <Input
                  value={formData.duration}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, duration: e.target.value }))}
                  placeholder="e.g., 6 months"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Hours</label>
                <Input
                  value={formData.hours}
                  onChange={(e) => setFormData((prev: Partial<NewCourse>) => ({ ...prev, hours: e.target.value }))}
                  placeholder="e.g., 120 hours"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={newOutcome}
                onChange={(e) => setNewOutcome(e.target.value)}
                placeholder="Add a learning outcome"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addArrayItem('learningOutcomes', newOutcome), setNewOutcome(''))}
              />
              <Button
                type="button"
                onClick={() => addArrayItem('learningOutcomes', newOutcome)}
                disabled={!newOutcome.trim()}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.learningOutcomes?.map((outcome, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {outcome}
                  <button
                    type="button"
                    onClick={() => removeArrayItem('learningOutcomes', index)}
                    className="ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Link href="/admin/courses">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={loading}>
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Creating...' : 'Create Course'}
          </Button>
        </div>
      </form>
    </div>
  );
} 