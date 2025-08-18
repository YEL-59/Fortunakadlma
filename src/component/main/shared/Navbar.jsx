"use client";

import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="w-full border-b bg-background dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left Section: Logo + Search */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
          </div>
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 w-64 rounded-full border text-sm bg-muted focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:text-gray-200"
            />
            <svg
              className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
              />
            </svg>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-8 text-sm">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" active />
          <NavItem icon={<Users className="h-5 w-5" />} label="My Network" />
          <NavItem icon={<Briefcase className="h-5 w-5" />} label="Job" />
          <NavItem
            icon={<MessageSquare className="h-5 w-5" />}
            label="Messaging"
          />
          <NavItem icon={<Bell className="h-5 w-5" />} label="Notification" />
        </div>

        {/* Right Section: Avatar + Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-full px-2 py-1"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* Theme Toggle */}
            <DropdownMenuItem
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-2 cursor-pointer"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" /> Light Mode
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

/* Reusable NavItem Component */
function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex flex-col items-center text-xs ${
        active
          ? "text-cyan-500 font-semibold"
          : "text-gray-500 hover:text-cyan-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
