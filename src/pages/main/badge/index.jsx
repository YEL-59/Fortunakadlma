import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Star, BarChart3, Target, FileText } from "lucide-react";

const Badge = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLeaderboardClick = () => {
    navigate("/badges/leaderboard");
  };

  const handleProgressClick = () => {
    navigate("/badges/progress");
  };

  const handleTaskClick = (taskType) => {
    console.log("Task clicked:", taskType);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="hover:bg-gray-200 bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Portfolio Builder</h1>
        </div>

        {/* User Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=96&h=96&fit=crop&crop=face"
                alt="Emily Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-400 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Emily Johnson</h2>
          <p className="text-gray-600 text-sm">Emily Johnson@gmail.com</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-teal-600 rounded-lg p-4 text-center text-white">
            <Trophy className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs mb-1">Your rank</p>
            <p className="text-2xl font-bold">26</p>
          </div>
          <div className="bg-teal-600 rounded-lg p-4 text-center text-white">
            <Star className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs mb-1">Points</p>
            <p className="text-2xl font-bold">487</p>
          </div>
          <div className="bg-teal-600 rounded-lg p-4 text-center text-white">
            <BarChart3 className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs mb-1">Activity</p>
            <div className="flex items-end justify-center gap-1 h-6">
              <div className="w-1 bg-white rounded-full" style={{ height: '60%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '80%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '40%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '90%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '70%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '50%' }}></div>
              <div className="w-1 bg-white rounded-full" style={{ height: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* My Portfolio Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">My Portfolio</h3>
          <div className="space-y-3">
            <div 
              onClick={() => handleTaskClick("goal")}
              className="bg-purple-100 rounded-lg p-4 cursor-pointer hover:bg-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-200 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Complete your Goal</h4>
                  <p className="text-sm text-gray-600">Earn 200 Point</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => handleTaskClick("test")}
              className="bg-orange-100 rounded-lg p-4 cursor-pointer hover:bg-orange-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-200 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Complete Test</h4>
                  <p className="text-sm text-gray-600">Earn 500 Point</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => handleTaskClick("resume")}
              className="bg-purple-100 rounded-lg p-4 cursor-pointer hover:bg-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-200 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Add resume</h4>
                  <p className="text-sm text-gray-600">Earn 500 Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleLeaderboardClick}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            View Leaderboard
          </Button>
          <Button
            onClick={handleProgressClick}
            variant="outline"
            className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            View Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Badge;