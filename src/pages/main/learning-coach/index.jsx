import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ChevronDown, Search, Play } from "lucide-react";

const LearningCoach = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleVideoClick = (videoId) => {
    // Navigate to video player page
    navigate(`/learning-coach/video-player/${videoId}`);
  };

  const handleCourseClick = (courseId) => {
    // Navigate to course details page
    navigate(`/learning-coach/course-details/${courseId}`);
  };

  const handleSeeAll = (section) => {
    // Navigate to see all videos/courses
    if (section === "short-videos") {
      navigate("/learning-coach/all-videos");
    } else if (section === "courses") {
      navigate("/learning-coach/all-courses");
    }
  };

  // Sample video data for short reels
  const shortVideos = [
    {
      id: 1,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 2,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 3,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 4,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 5,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=300&fit=crop",
      isNew: true,
    },
    {
      id: 6,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
      isNew: true,
    },
  ];

  // Sample course data for longer videos
  const courses = [
    {
      id: 1,
      title: "Building Your English Brain",
      instructor: "Olya Kobruseva",
      level: "Beginner",
      lessons: "5 Lession",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Building Your English Brain",
      instructor: "Olya Kobruseva",
      level: "Beginner",
      lessons: "5 Lession",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Building Your English Brain",
      instructor: "Olya Kobruseva",
      level: "Beginner",
      lessons: "5 Lession",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen p-4">
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
          <h1 className="text-xl font-semibold text-gray-900">Learning coach</h1>
        </div>

        {/* Search and Category Bar */}
        <div className="flex gap-3 mb-8">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white border-gray-300 hover:bg-gray-50"
          >
            All Category
            <ChevronDown className="w-4 h-4" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Search math, science.."
              className="pl-4 pr-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Daily Life Videos Section - Short Reels */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Daily life Videos</h2>
            <button
              onClick={() => handleSeeAll("short-videos")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {shortVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
                className="relative cursor-pointer group"
              >
                <div className="relative rounded-lg overflow-hidden">
                  {/* New Tag */}
                  {video.isNew && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-yellow-400 text-xs font-medium px-2 py-1 rounded text-gray-900">
                        new
                      </span>
                    </div>
                  )}
                  
                  {/* Video Image */}
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Overlay with Title and Views */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                    <h3 className="text-sm font-medium mb-1">{video.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                        <Play className="w-2 h-2 text-white" />
                      </div>
                      <span className="text-xs">{video.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Life Videos Section - Courses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Daily life Videos</h2>
            <button
              onClick={() => handleSeeAll("courses")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
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
                </div>
                
                {/* Course Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span>{course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-gray-500">{course.level}</span>
                    <span className="text-sm text-gray-500">{course.lessons}</span>
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

export default LearningCoach;
