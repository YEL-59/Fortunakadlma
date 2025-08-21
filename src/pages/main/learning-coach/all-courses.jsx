import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Play, Filter, Clock, User, BookOpen } from "lucide-react";

const AllCourses = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/learning-coach/course-details/${courseId}`);
  };

  // Extended course data
  const allCourses = [
    {
      id: 1,
      title: "Building Your English Brain",
      instructor: "Olya Kobruseva",
      level: "Beginner",
      lessons: "5 Lession",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      duration: "2h 15m",
      students: "1.2K",
    },
    {
      id: 2,
      title: "Advanced Communication Skills",
      instructor: "Sarah Johnson",
      level: "Intermediate",
      lessons: "8 Lession",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
      duration: "3h 45m",
      students: "856",
    },
    {
      id: 3,
      title: "Leadership Mastery",
      instructor: "Michael Chen",
      level: "Advanced",
      lessons: "12 Lession",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
      duration: "5h 30m",
      students: "2.1K",
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      instructor: "Emma Wilson",
      level: "Beginner",
      lessons: "6 Lession",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop",
      duration: "2h 50m",
      students: "1.8K",
    },
    {
      id: 5,
      title: "Data Science Essentials",
      instructor: "David Kim",
      level: "Intermediate",
      lessons: "10 Lession",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=200&fit=crop",
      duration: "4h 20m",
      students: "1.5K",
    },
    {
      id: 6,
      title: "Creative Writing Workshop",
      instructor: "Lisa Rodriguez",
      level: "Beginner",
      lessons: "7 Lession",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=200&fit=crop",
      duration: "3h 15m",
      students: "923",
    },
    {
      id: 7,
      title: "Project Management Pro",
      instructor: "Alex Thompson",
      level: "Advanced",
      lessons: "15 Lession",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      duration: "6h 45m",
      students: "1.7K",
    },
    {
      id: 8,
      title: "Financial Literacy Basics",
      instructor: "Rachel Green",
      level: "Beginner",
      lessons: "4 Lession",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      duration: "1h 55m",
      students: "2.3K",
    },
    {
      id: 9,
      title: "UX/UI Design Principles",
      instructor: "Carlos Martinez",
      level: "Intermediate",
      lessons: "9 Lession",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
      duration: "3h 55m",
      students: "1.1K",
    },
    {
      id: 10,
      title: "Public Speaking Confidence",
      instructor: "Jennifer Lee",
      level: "Beginner",
      lessons: "6 Lession",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
      duration: "2h 30m",
      students: "1.4K",
    },
    {
      id: 11,
      title: "Business Strategy & Planning",
      instructor: "Robert Davis",
      level: "Advanced",
      lessons: "11 Lession",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop",
      duration: "4h 50m",
      students: "987",
    },
    {
      id: 12,
      title: "Mindfulness & Wellness",
      instructor: "Amanda Foster",
      level: "Beginner",
      lessons: "5 Lession",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=200&fit=crop",
      duration: "2h 10m",
      students: "1.6K",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="hover:bg-gray-200 bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">All Courses</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <Input
              placeholder="Search courses..."
              className="pl-4 pr-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white border-gray-300 hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                  {course.level}
                </div>
              </div>
              
              {/* Course Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <span>{course.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{course.students} students</span>
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
