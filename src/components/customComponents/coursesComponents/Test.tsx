"use client"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Component() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          What sets us apart to make a difference
        </h2>

        {/* Courses Section */}
        <div className="relative bg-blue-50 rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Educational illustration"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Courses designed to make you ready for the world
              </h3>
              <p className="text-gray-600">
                Our courses are made by experts, using real-world examples and storytelling to teach you important skills that help you earn more money. You get latest syllabus, examples, and connect with like-minded people to grow together.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Courses
              </Button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 text-blue-200">*</div>
          <div className="absolute bottom-0 left-0 w-20 h-20 text-blue-200">○</div>
        </div>

        {/* Articles Section */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Thought-Provoking articles on Business and Geopolitics
              </h3>
              <p className="text-gray-600">
                Discover interesting and easy-to-read articles that explore the world of business and geopolitics with real-life examples. Our well-researched articles provide a fresh perspective and a deeper understanding of how things work in the world.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Case studies
              </Button>
            </div>
            <div className="relative order-first md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Person working illustration"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Video Case Studies Section */}
        <div className="relative bg-blue-50 rounded-2xl p-8 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Video case studies illustration"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Video Case studies that no Business School will teach you:
              </h3>
              <p className="text-gray-600">
                Expand your knowledge of the world of business and geopolitics with in-depth video analysis dissecting hot topics and current events. Get access to valuable insights that no business school can teach you.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Visit YouTube Channel
              </Button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 text-blue-200">*</div>
          <div className="absolute bottom-0 left-0 w-20 h-20 text-blue-200">○</div>
        </div>
      </div>
    </div>
  )
}