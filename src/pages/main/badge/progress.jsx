import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, PartyPopper } from "lucide-react";

const Progress = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // Sample data points for the graph
  const graphData = [
    { x: 0, y: 20 },
    { x: 1, y: 45 },
    { x: 2, y: 30 },
    { x: 3, y: 80 },
    { x: 4, y: 60 },
    { x: 5, y: 90 },
    { x: 6, y: 70 },
    { x: 7, y: 85 },
    { x: 8, y: 65 },
    { x: 9, y: 95 },
    { x: 10, y: 75 },
    { x: 11, y: 100 },
    { x: 12, y: 487 } // Current point
  ];

  const maxY = Math.max(...graphData.map(d => d.y));
  const graphWidth = 300;
  const graphHeight = 200;

  const getPathData = () => {
    const points = graphData.map((point, index) => {
      const x = (point.x / (graphData.length - 1)) * graphWidth;
      const y = graphHeight - (point.y / maxY) * graphHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return points.join(' ');
  };

  const getAreaPathData = () => {
    const points = graphData.map((point, index) => {
      const x = (point.x / (graphData.length - 1)) * graphWidth;
      const y = graphHeight - (point.y / maxY) * graphHeight;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    });
    return points.join(' ') + ` L ${graphWidth} ${graphHeight} L 0 ${graphHeight} Z`;
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

        {/* Achievement Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-pink-500 to-blue-500 rounded-full flex items-center justify-center">
              <PartyPopper className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-lg px-4 py-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-900">487</span>
          </div>
        </div>

        {/* Progress Graph */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="relative">
            <svg
              width={graphWidth}
              height={graphHeight}
              className="w-full h-auto"
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            >
              {/* Area fill */}
              <path
                d={getAreaPathData()}
                fill="url(#areaGradient)"
                opacity="0.3"
              />
              
              {/* Line */}
              <path
                d={getPathData()}
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Current point marker */}
              <circle
                cx={(graphData[graphData.length - 1].x / (graphData.length - 1)) * graphWidth}
                cy={graphHeight - (graphData[graphData.length - 1].y / maxY) * graphHeight}
                r="6"
                fill="white"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Current points label */}
            <div 
              className="absolute bg-blue-500 text-white text-xs px-2 py-1 rounded"
              style={{
                left: `${(graphData[graphData.length - 1].x / (graphData.length - 1)) * 100}%`,
                top: `${100 - (graphData[graphData.length - 1].y / maxY) * 100}%`,
                transform: 'translate(-50%, -100%)',
                marginTop: '-10px'
              }}
            >
              487 P
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Progress</h3>
          <p className="text-gray-600 text-sm">
            You've earned 487 points this month! Keep up the great work and continue building your portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
