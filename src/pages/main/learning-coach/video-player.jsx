import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause, Volume2, Maximize, Bookmark, X, SkipBack, SkipForward } from "lucide-react";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(25); // 00:25
  const [totalTime, setTotalTime] = useState(159); // 02:39 total
  const [progress, setProgress] = useState(25 / 159); // 15.7%

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleBookmark = () => {
    console.log("Bookmark clicked");
  };

  const handlePrevious = () => {
    console.log("Previous video");
  };

  const handleNext = () => {
    console.log("Next video");
  };

  const handleRewind = () => {
    console.log("Rewind 10 seconds");
  };

  const handleFastForward = () => {
    console.log("Fast forward 10 seconds");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingTime = totalTime - currentTime;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-full max-w-sm mx-auto">
        {/* Video Container */}
        <div className="relative bg-black rounded-lg overflow-hidden aspect-[9/16] max-h-[80vh]">
          {/* Video Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop')"
            }}
          >
            {/* Top Controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBookmark}
                className="w-10 h-10 bg-white bg-opacity-90 hover:bg-white rounded-full"
              >
                <Bookmark className="w-5 h-5 text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="w-10 h-10 bg-white bg-opacity-90 hover:bg-white rounded-full"
              >
                <X className="w-5 h-5 text-black" />
              </Button>
            </div>

            {/* Text Overlay */}
            <div className="absolute top-20 left-4 right-4 text-center">
              <div className="bg-white bg-opacity-90 rounded-lg px-4 py-2 inline-block">
                <p className="text-black font-medium text-sm">
                  Maybe you are willing to come a little further
                </p>
              </div>
            </div>

            {/* Side Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="w-10 h-10 bg-white bg-opacity-90 hover:bg-white rounded-full"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </Button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="w-10 h-10 bg-white bg-opacity-90 hover:bg-white rounded-full"
              >
                <ArrowLeft className="w-5 h-5 text-black rotate-180" />
              </Button>
            </div>

            {/* Bottom Playback Controls */}
            <div className="absolute bottom-4 left-4 right-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-white text-xs mb-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>-{formatTime(remainingTime)}</span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-1">
                  <div 
                    className="bg-white h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleRewind}
                  className="w-12 h-12 bg-white bg-opacity-90 hover:bg-white rounded-full"
                >
                  <SkipBack className="w-6 h-6 text-black" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayPause}
                  className="w-16 h-16 bg-white bg-opacity-90 hover:bg-white rounded-full"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-black" />
                  ) : (
                    <Play className="w-8 h-8 text-black ml-1" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFastForward}
                  className="w-12 h-12 bg-white bg-opacity-90 hover:bg-white rounded-full"
                >
                  <SkipForward className="w-6 h-6 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button for Mobile */}
        <div className="absolute top-4 left-4 z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="w-10 h-10 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
