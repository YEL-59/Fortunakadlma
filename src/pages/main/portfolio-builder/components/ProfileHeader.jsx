import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";

const QuickTag = ({ children }) => (
    <div className="px-3 py-1 rounded-full border text-sm text-slate-600 bg-white/60 backdrop-blur">
        {children}
    </div>
);

const ProfileHeader = () => {
    const { register } = useFormContext();
    return (
        <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center gap-4 border">
            <div className="relative">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                    alt="avatar"
                    className="w-20 h-20 rounded-full border-4 border-teal-400 shadow"
                />
                <Button size="sm" variant="outline" className="absolute -right-2 -bottom-2">View Profile</Button>
            </div>
            <div className="text-center">
                <input
                    {...register("profile.fullName")}
                    placeholder="Emily Johnson"
                    className="bg-transparent text-2xl font-semibold text-slate-900 text-center outline-none"
                />
                <input
                    {...register("profile.email")}
                    placeholder="emily.johnson@gmail.com"
                    className="bg-transparent text-slate-500 text-sm text-center outline-none"
                />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <QuickTag>No goals</QuickTag>
                <QuickTag>2 skills</QuickTag>
                <QuickTag>1 project</QuickTag>
                <QuickTag>Test experience</QuickTag>
            </div>
        </div>
    );
};

export default ProfileHeader;
