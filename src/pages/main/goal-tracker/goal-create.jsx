"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ---- Zod Schema ----
const formSchema = z.object({
  goalName: z.string().min(2, "Goal name is required"),
  goalPrompt: z.string().min(5, "Prompt is required"),
  duration: z.string().min(1, "Duration required"),
});

export default function GoalCreate() {
  const [tab, setTab] = React.useState("ai");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goalName: "",
      goalPrompt: "",
      duration: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <>
      <div className="h-screen">
        <div className="w-full max-w-2xl mx-auto space-y-6 p-6 rounded-xl bg-gray-50 mt-20 ">
          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              className={cn(
                "rounded-full px-4 py-2",
                tab === "ai"
                  ? "bg-cyan-400 text-white"
                  : "bg-white text-gray-700"
              )}
              onClick={() => setTab("ai")}
            >
              AI suggested goal
            </Button>
            <Button
              type="button"
              variant="ghost"
              className={cn(
                "rounded-full px-4 py-2",
                tab === "custom"
                  ? "bg-cyan-400 text-white"
                  : "bg-white text-gray-700"
              )}
              onClick={() => setTab("custom")}
            >
              Create your own
            </Button>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Goal Name */}
              <FormField
                control={form.control}
                name="goalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Goal Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter goal name"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Prompt */}
              <FormField
                control={form.control}
                name="goalPrompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Goal Generation Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Give a prompt"
                        {...field}
                        className="rounded-xl"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Duration */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 3 months"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Buttons */}
              <div className="flex gap-4 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Sample Prompts
                </Button>
                <Button
                  type="submit"
                  className="rounded-full px-6 bg-cyan-400 hover:bg-cyan-500 text-white"
                >
                  Generate Goal
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
