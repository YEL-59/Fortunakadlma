"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ArrowBigLeft } from "lucide-react";
import GoalsList from "./goal-list";

// ✅ Reusable Circle Component
function ProgressCircle({ value = 0, size = 120, strokeWidth = 10 }) {
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
        <span className="text-cyan-400 font-semibold text-xl">{value}%</span>
      </div>
    </div>
  );
}

// ✅ Main Widget Component
export default function GoalTracker() {
  const [date, setDate] = useState(new Date());
  const progress = 50;

  // Generate 7 days (3 before, today, 3 after)
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = addDays(date, i - 3);
    return {
      date: format(d, "d"),
      day: format(d, "EEE"),
      isToday: format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
    };
  });

  return (
    <div className="container mx-auto  ">
      <div className="py-10">
        <div className="h-10 w-10 bg-white rounded flex justify-center items-center">
          <ArrowBigLeft />
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 pb-10">
        {/* Progress Circle */}
        <ProgressCircle value={progress} size={112} strokeWidth={10} />

        {/* Calendar Card */}
        <Card className="flex-1 shadow-md rounded-2xl">
          <CardContent className="flex justify-between items-center p-6">
            {/* Left side text */}
            <div>
              <h2 className="font-semibold text-lg">
                {format(date, "MMMM d")}
              </h2>
              <p className="text-gray-500 text-sm">10 tasks today</p>
            </div>

            {/* Middle: Week Dates */}
            <div className="flex items-center gap-6">
              {days.map((d, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-gray-500 ${
                    d.isToday
                      ? "bg-cyan-400 text-white px-3 py-2 rounded-full shadow-md"
                      : ""
                  }`}
                >
                  <span className="text-base font-medium">{d.date}</span>
                  <span className="text-xs">{d.day}</span>
                </div>
              ))}
            </div>

            {/* Right: Calendar Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="bg-cyan-400 text-white p-2 rounded-full shadow-md">
                  <CalendarIcon size={20} />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>

      <div>
        <GoalsList />
      </div>
    </div>
  );
}
