import React, { useMemo } from "react";
import { Calendar, Clock } from "lucide-react";

export const STAGES = [
    { key: "accepted", label: "Accepted", desc: "Congrats! you are accepted to work" },
    { key: "user-interview", label: "User Interview", desc: "You are in the user interview stage" },
    { key: "hr-interview", label: "HRD Interview", desc: "You are in the HRD interview stage" },
    { key: "review", label: "On Reviews", desc: "Your applications is currently under review" },
    { key: "applied", label: "Your Apply", desc: "Your application has been successfully sent" },
];

const OFFSETS_DAYS = {
    applied: 0,
    review: 3,
    "hr-interview": 5,
    "user-interview": 7,
    accepted: 20,
};

function fmt(dt) {
    try {
        return new Date(dt).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "2-digit" });
    } catch {
        return "";
    }
}

const ApplicationTimeline = ({ application }) => {
    const currentIndex = useMemo(() => Math.max(0, STAGES.findIndex((s) => s.key === application.status)), [application.status]);
    const appliedAt = application.appliedAt || Date.now();

    // padding-left is pl-8 (32px), dot size is 16px -> center at 32 + 8 = 40px
    return (
        <div className="relative pl-8">
            {/* grey line */}
            <div className="absolute left-[40px] top-0 bottom-0 w-[2px] bg-slate-200" />
            {/* blue progress line to current */}
            <div className="absolute left-[40px] top-0 w-[2px] bg-sky-500" style={{ height: `${((currentIndex + 1) / STAGES.length) * 100}%` }} />

            <div className="space-y-6">
                {STAGES.map((s, idx) => {
                    const reached = currentIndex >= idx;
                    const date = new Date(appliedAt + (OFFSETS_DAYS[s.key] || 0) * 86400000);
                    return (
                        <div key={s.key} className="flex gap-4 items-start">
                            {/* dot */}
                            <div className={`mt-[2px] w-4 h-4 rounded-full ring-2 ${reached ? "bg-sky-500 ring-sky-200" : "bg-white ring-slate-300"}`} />
                            {/* content */}
                            <div>
                                <div className={`text-sm font-semibold ${reached ? "text-slate-900" : "text-slate-400"}`}>{s.label}</div>
                                <div className={`text-xs ${reached ? "text-sky-600" : "text-slate-400"}`}>{s.desc}</div>
                                <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-2">
                                    <div className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {fmt(date)}</div>
                                    <div className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ApplicationTimeline;
