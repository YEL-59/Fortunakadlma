import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User } from "lucide-react";

const Leaderboard = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const leaderboardData = [
    {
      id: 1,
      name: "TessyLand Wintosa",
      points: 965,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
      rank: null,
      isTop3: true,
      rankColor: "bg-orange-200"
    },
    {
      id: 2,
      name: "Aviano Bacatto",
      points: 586,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      rank: null,
      isTop3: true,
      rankColor: "bg-blue-200"
    },
    {
      id: 3,
      name: "Papan Kirodsa",
      points: 762,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face",
      rank: null,
      isTop3: true,
      rankColor: "bg-orange-200"
    },
    {
      id: 4,
      name: "Miamuna Kasejo",
      points: 838,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face",
      rank: 4,
      isTop3: false
    },
    {
      id: 5,
      name: "Yamma Iokado",
      points: 586,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=48&h=48&fit=crop&crop=face",
      rank: 5,
      isTop3: false
    },
    {
      id: 6,
      name: "Mianoba",
      points: 520,
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=48&h=48&fit=crop&crop=face",
      rank: 6,
      isTop3: false
    },
    {
      id: 7,
      name: "Loweajcto",
      points: 465,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
      rank: 7,
      isTop3: false
    },
    {
      id: 8,
      name: "Loweajcto",
      points: 465,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      rank: 7,
      isTop3: false
    },
    {
      id: 9,
      name: "Loweajcto",
      points: 465,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face",
      rank: 7,
      isTop3: false
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
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
          <h1 className="text-xl font-semibold text-gray-900">Portfolio Builder</h1>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-0">
          {leaderboardData.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-4 ${
                index > 2 ? 'border-t border-gray-100' : ''
              }`}
            >
              {/* Rank or Icon */}
              <div className="w-8 flex justify-center">
                {user.isTop3 ? (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${user.rankColor}`}>
                    <User className="w-3 h-3 text-gray-600" />
                  </div>
                ) : (
                  <span className="text-gray-500 font-medium">{user.rank}</span>
                )}
              </div>

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Points */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{user.name}</h3>
              </div>

              {/* Points */}
              <div className="text-right">
                <span className="font-semibold text-gray-900">{user.points} P</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
