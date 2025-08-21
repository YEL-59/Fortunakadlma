import React from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, PenTool, Heart, Users } from "lucide-react";

const InterviewPreparation = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "creative-role",
      title: "Creative Role",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "business",
      title: "Business",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "engineering",
      title: "Engineering",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "science-tech",
      title: "Science & Tech",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "general",
      title: "General Interview",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/interview-prep/${categoryId}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackClick}
            className="hover:bg-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900">Interview Prep</h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer hover:shadow-md transition-shadow duration-200 bg-white"
              onClick={() => handleCategoryClick(category.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;
