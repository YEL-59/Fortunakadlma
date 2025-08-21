import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Clock, User, BookOpen } from "lucide-react";

const CourseDetails = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLessonClick = (lessonId) => {
    console.log("Lesson clicked:", lessonId);
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to English Brain",
      duration: "15 min",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Basic Grammar Rules",
      duration: "20 min",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Vocabulary Building",
      duration: "25 min",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Speaking Practice",
      duration: "30 min",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Final Assessment",
      duration: "15 min",
      isCompleted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="hover:bg-gray-200 bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Course Details</h1>
        </div>

        {/* Course Hero Section */}
        <div className="bg-white rounded-lg shadow-sm mx-4 mb-6 overflow-hidden">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
              alt="Course Cover"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3"
              >
                <Play className="w-6 h-6 mr-2" />
                Start Course
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Building Your English Brain
            </h2>
            
            <div className="flex items-center gap-6 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Olya Kobruseva</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Beginner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 Lessons</span>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Master the fundamentals of English language learning with this comprehensive course. 
              Learn essential grammar rules, build your vocabulary, and practice speaking skills 
              through interactive lessons designed for beginners.
            </p>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="bg-white rounded-lg shadow-sm mx-4 mb-6">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Course Lessons</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                onClick={() => handleLessonClick(lesson.id)}
                className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {lesson.isCompleted ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    ) : (
                      <Play className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
