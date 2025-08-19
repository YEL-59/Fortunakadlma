"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Smile,
  Image as ImageIcon,
  Send,
  User,
} from "lucide-react";

const postsData = [
  {
    id: 1,
    author: {
      name: "Prothinidi Thomas",
      role: "UI/UX Designer at Freelance",
      time: "7 hours ago",
      avatarInitials: "PT",
      avatarColor:
        "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    },
    content: {
      text: "He said, Design is not just what it looks and feels like. Design is how it work.",
      image: "design-image-1.jpg",
    },
    stats: {
      likes: 9,
      comments: 3,
      shares: 17,
      likedUsers: [
        {
          id: 1,
          name: "User 1",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          id: 2,
          name: "User 2",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          id: 3,
          name: "User 3",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
      ],
    },
  },
  {
    id: 2,
    author: {
      name: "Alex Johnson",
      role: "Product Designer at TechCorp",
      time: "5 hours ago",
      avatarInitials: "AJ",
      avatarColor:
        "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    },
    content: {
      text: "Good design is obvious. Great design is transparent.",
      image: "design-image-2.jpg",
    },
    stats: {
      likes: 24,
      comments: 8,
      shares: 5,
      likedUsers: [
        {
          id: 1,
          name: "User A",
          avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
          id: 2,
          name: "User B",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        },
      ],
    },
  },
];

const PostCard = ({ post }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow duration-300 border rounded-lg mb-4 dark:border-gray-700 dark:bg-gray-900">
      <CardContent className="p-4">
        {/* Post Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <Avatar className={`h-12 w-12 ${post.author.avatarColor}`}>
              <AvatarFallback className="font-semibold">
                {post.author.avatarInitials}
              </AvatarFallback>
              <AvatarImage src="" alt={post.author.name} />
            </Avatar>
            <div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {post.author.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {post.author.role} • {post.author.time}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-3 text-xs font-medium dark:border-gray-600 dark:text-gray-300"
          >
            Follow +
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-gray-800 dark:text-gray-200 mb-3">
            {post.content.text}
          </p>
          <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 flex items-center justify-center text-gray-400 dark:text-gray-500">
            {post.content.image}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 mb-3 border-t border-b border-gray-100 dark:border-gray-700 py-2">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {post.stats.likedUsers.map((user) => (
                <Avatar
                  key={user.id}
                  className="h-6 w-6 border-2 border-white dark:border-gray-800"
                >
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    <User className="h-3 w-3" />
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="flex items-center cursor-pointer hover:text-blue-500 ml-3 text-sm">
              <Heart className="h-4 w-4 mr-1" />
              Like {post.stats.likes > 0 && <span>· {post.stats.likes}</span>}
            </span>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="flex items-center cursor-pointer hover:text-blue-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              {post.stats.comments} Comments
            </span>
            <span className="flex items-center cursor-pointer hover:text-blue-500">
              <Share2 className="h-4 w-4 mr-1" />
              {post.stats.shares} Shares
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center px-2 py-2 border-t border-b border-gray-100 dark:border-gray-700">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-800 dark:text-gray-200">
              <DropdownMenuItem>Save Post</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Turn on notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Comment Input */}
        <div className="flex items-center gap-2 px-2 py-3 border-t border-gray-100 dark:border-gray-700">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Me"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div className="flex-1 relative">
            <Input
              placeholder="Write a comment..."
              className="rounded-full pl-4 pr-16 text-sm dark:bg-gray-800 dark:text-gray-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2 text-gray-500 dark:text-gray-400">
              <button className="hover:text-blue-500 text-xs font-semibold">
                GIF
              </button>
              <button className="hover:text-blue-500">
                <Smile className="h-4 w-4" />
              </button>
              <button className="hover:text-blue-500">
                <ImageIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Send className="h-5 w-5 text-blue-500" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PostsFeed() {
  return (
    <div className="flex flex-col gap-5">
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
