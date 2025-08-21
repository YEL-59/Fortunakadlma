import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, PartyPopper } from "lucide-react";

const Congratulations = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleViewBadges = () => {
    // Navigate to badges page
    console.log("View badges clicked");
  };

  const handleBackToHome = () => {
    // Navigate to home page
    navigate("/");
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
            className="hover:bg-gray-200 bg-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Interview Prep</h1>
        </div>

        {/* Achievement Display Card */}
        <div className="bg-blue-400 rounded-xl p-8 mb-8 text-center">
          {/* Party Popper Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <PartyPopper className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
          
          {/* Points Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-900">2600</span>
          </div>
        </div>

        {/* Congratulatory Message */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Congratulations!</h2>
          <p className="text-gray-600 text-lg">
            You got 2600 points and you are on the 6th place on this quiz leaderboard, keep it up!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={handleViewBadges}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg"
          >
            View Badges
          </Button>
          
          <Button
            onClick={handleBackToHome}
            variant="outline"
            className="w-full border-blue-400 text-blue-400 hover:bg-blue-50 font-semibold py-3 rounded-lg"
          >
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
