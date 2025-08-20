import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";

function ProgressCircle({ value = 0, size = 50, strokeWidth = 6 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-cyan-400"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-cyan-400 text-xs font-semibold">{value}%</span>
      </div>
    </div>
  );
}

function GoalCard({ goal }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <ProgressCircle value={goal.progress} />
          <div>
            <p className="text-xs text-gray-400">{goal.date}</p>
            <p className="text-sm font-medium">{goal.title}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </CardContent>
    </Card>
  );
}

export default function GoalsList() {
  const navigate = useNavigate();
  const goals = [
    {
      id: 1,
      title: "Learning Bootstrap",
      date: "Mon, 16 Jan 2022",
      progress: 30,
    },
    { id: 2, title: "Build Website", date: "Mon, 21 Feb 2022", progress: 20 },
    { id: 3, title: "Coding Html", date: "Mon, 21 Jan 2022", progress: 70 },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Update height on tab change
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-gray-100 rounded-full p-1 w-fit">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-cyan-400 data-[state=active]:text-white rounded-full px-4"
          >
            All goals
          </TabsTrigger>
          <TabsTrigger
            value="progress"
            className="data-[state=active]:bg-cyan-400 data-[state=active]:text-white rounded-full px-4"
          >
            In Progress
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-cyan-400 data-[state=active]:text-white rounded-full px-4"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        {/* Animated Content Container */}
        <div
          ref={contentRef}
          className="transition-all duration-300 overflow-hidden"
          style={{ height: contentHeight }}
        >
          {activeTab === "all" && (
            <div className="space-y-3 pt-4">
              {goals.map((g) => (
                <GoalCard key={g.id} goal={g} />
              ))}
            </div>
          )}
          {activeTab === "progress" && (
            <div className="pt-4">
              <p className="text-gray-400 text-sm">No goals in progress.</p>
            </div>
          )}
          {activeTab === "completed" && (
            <div className="pt-4">
              <p className="text-gray-400 text-sm">No goals completed yet.</p>
            </div>
          )}
        </div>
      </Tabs>

      <Button
        onClick={() => navigate("/create-new-goal")}
        className="w-full rounded-full bg-cyan-400 hover:bg-cyan-500"
      >
        Add New Goal
      </Button>
    </div>
  );
}
