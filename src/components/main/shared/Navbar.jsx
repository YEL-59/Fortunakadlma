"use client";

import { useNavigate, useLocation } from "react-router";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  Menu,
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/ui/theme-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Home className="h-5 w-5" />, label: "Home", to: "/" },
    { icon: <Users className="h-5 w-5" />, label: "My Network", to: "/network" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Jobs", to: "/jobs" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Messaging", to: "/messaging" },
    { icon: <Bell className="h-5 w-5" />, label: "Notifications", to: "/notifications" },
  ];

  return (
    <div className="w-full border-b bg-background dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-5">
        {/* Left Section: Logo + Search */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
          </div>
          {/* Search - Hidden on mobile */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 w-48 sm:w-64 rounded-full border text-sm bg-muted focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 dark:text-gray-200"
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

        {/* Center Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              currentPath={location.pathname}
            />
          ))}
        </div>

        {/* Right Section: Avatar + Dropdown + Mobile Menu */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.to}
                    icon={item.icon}
                    label={item.label}
                    to={item.to}
                    currentPath={location.pathname}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-1 sm:gap-2 rounded-full px-1 sm:px-2 py-1"
              >
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 hidden sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                Settings
              </DropdownMenuItem>
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
              <DropdownMenuItem onClick={() => navigate("/logout")}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

/* Reusable NavItem Component */
function NavItem({ icon, label, to = "/", currentPath }) {
  const navigate = useNavigate();
  const isActive = currentPath === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex flex-col items-center text-xs ${isActive
        ? "text-cyan-500 font-semibold"
        : "text-gray-500 hover:text-cyan-500"
        }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* Mobile NavItem Component */
function MobileNavItem({ icon, label, to = "/", currentPath }) {
  const navigate = useNavigate();
  const isActive = currentPath === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors ${isActive
        ? "bg-cyan-50 text-cyan-600 border border-cyan-200"
        : "text-gray-700 hover:bg-gray-50"
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
