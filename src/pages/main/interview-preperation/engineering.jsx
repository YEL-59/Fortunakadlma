import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Play, Mic } from "lucide-react";

const EngineeringInterview = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMicClick = () => {
    // Handle voice input functionality
    console.log("Microphone clicked - voice input");
  };

  const handlePlayAudio = () => {
    // Handle audio playback functionality
    console.log("Play audio clicked");
  };

  const handleSubmit = () => {
    // Navigate to congratulations page
    navigate("/interview-prep/congratulations");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="hover:bg-gray-200 bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">Interview Prep</h1>
        </div>

        {/* Sub-header */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-gray-700">Interview Prep Engineering</h2>
        </div>

        {/* Interview Question Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            
            {/* Question Content */}
            <div className="flex-1">
              {/* Speech bubble with question */}
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-gray-800">
                  Walk me through a complex technical problem you solved and the approach you took...
                </p>
              </div>
              
              {/* Audio playback button */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayAudio}
                  className="w-8 h-8 bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Input Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <label className="text-lg font-semibold text-gray-900">Answer:</label>
          </div>
          <Textarea
            placeholder="Write your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-32 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Voice Input Button */}
        <div className="flex flex-col items-center mb-6">
          <Button
            onClick={handleMicClick}
            className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
          >
            <Mic className="w-8 h-8 text-white" />
          </Button>
          <p className="text-sm text-gray-600 mt-2">Tap mic to speak</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg"
          >
            Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EngineeringInterview;
