import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Play, Filter } from "lucide-react";

const AllVideos = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleVideoClick = (videoId) => {
    navigate(`/learning-coach/video-player/${videoId}`);
  };

  // Extended video data
  const allVideos = [
    {
      id: 1,
      title: "Planning a Meeting",
      views: "356K",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop",
      isNew: true,
      category: "Business",
    },
    {
      id: 2,
      title: "Effective Communication",
      views: "245K",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=300&fit=crop",
      isNew: true,
      category: "Communication",
    },
    {
      id: 3,
      title: "Time Management Tips",
      views: "189K",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=300&fit=crop",
      isNew: false,
      category: "Productivity",
    },
    {
      id: 4,
      title: "Leadership Skills",
      views: "423K",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=300&fit=crop",
      isNew: true,
      category: "Leadership",
    },
    {
      id: 5,
      title: "Problem Solving",
      views: "312K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=300&fit=crop",
      isNew: false,
      category: "Skills",
    },
    {
      id: 6,
      title: "Team Collaboration",
      views: "278K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
      isNew: true,
      category: "Teamwork",
    },
    {
      id: 7,
      title: "Public Speaking",
      views: "156K",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop",
      isNew: false,
      category: "Communication",
    },
    {
      id: 8,
      title: "Goal Setting",
      views: "203K",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=300&fit=crop",
      isNew: false,
      category: "Productivity",
    },
    {
      id: 9,
      title: "Conflict Resolution",
      views: "167K",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=300&fit=crop",
      isNew: true,
      category: "Leadership",
    },
    {
      id: 10,
      title: "Creative Thinking",
      views: "134K",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=300&fit=crop",
      isNew: false,
      category: "Skills",
    },
    {
      id: 11,
      title: "Networking Tips",
      views: "298K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=300&fit=crop",
      isNew: true,
      category: "Business",
    },
    {
      id: 12,
      title: "Stress Management",
      views: "221K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
      isNew: false,
      category: "Wellness",
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
          <h1 className="text-xl font-semibold text-gray-900">All Videos</h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <Input
              placeholder="Search videos..."
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

        {/* Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {allVideos.map((video) => (
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
                
                {/* Category Tag */}
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
                
                {/* Video Image */}
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
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
    </div>
  );
};

export default AllVideos;
