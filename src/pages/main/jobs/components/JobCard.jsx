import React from "react";
import { Bookmark } from "lucide-react";

const Chip = ({ children }) => (
    <span className="text-[10px] px-2 py-0.5 rounded-full border text-slate-600 bg-white leading-none">{children}</span>
);

const JobCard = ({ job, onSelect }) => {
    return (
        <div
            className="bg-white rounded-xl border p-4 hover:shadow-sm cursor-pointer transition"
            onClick={() => onSelect(job)}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                        <img src={job.logo || "https://www.google.com/favicon.ico"} alt="logo" className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-slate-900">{job.title}</div>
                        <div className="text-[11px] text-slate-500">{job.company}</div>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600" onClick={(e) => { e.stopPropagation(); }}>
                    <Bookmark className="w-4 h-4" />
                </button>
            </div>
            <div className="text-[11px] text-slate-500 mt-2">{job.location}</div>
            <div className="text-[11px] mt-1">
                <span className="text-sky-500 font-medium">{job.salary}</span>
                <span className="text-slate-400"> / Month</span>
            </div>
            <div className="flex gap-2 mt-3">
                {job.badges?.map((b) => (<Chip key={b}>{b}</Chip>))}
            </div>
        </div>
    );
};

export default JobCard;
