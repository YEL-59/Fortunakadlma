import React, { useState } from "react";
import JobCard from "./JobCard";

const sampleJobs = [
    { id: "1", title: "UI/UX Designer", company: "Google LLC", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Remote"] },
    { id: "2", title: "Quality Assurance", company: "Spotify", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Onsite"] },
    { id: "3", title: "Quality Assurance", company: "Spotify", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Onsite"] },
    { id: "4", title: "UI/UX Designer", company: "Google LLC", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Remote"] },
    { id: "5", title: "Quality Assurance", company: "Spotify", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Onsite"] },
    { id: "6", title: "Quality Assurance", company: "Spotify", location: "California, United States", salary: "$10,000 - $25,000", type: "Full-time", badges: ["Full Time", "Onsite"] },
];

const Tabs = ({ active, onChange }) => {
    const items = ["Preferences", "Ai Matches", "My Jobs"];
    return (
        <div className="flex items-center gap-3">
            {items.map((t) => (
                <button
                    key={t}
                    onClick={() => onChange(t)}
                    className={`px-4 py-2 rounded-full text-sm transition border ${active === t ? "bg-sky-500 text-white border-sky-500 shadow" : "bg-white text-slate-600 hover:bg-slate-50"}`}
                >
                    {t}
                </button>
            ))}
        </div>
    );
};

const Section = ({ title, jobs, onSelect }) => (
    <div className="space-y-3">
        <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <button className="text-sky-500 text-sm">See All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {jobs.map((j) => (
                <JobCard key={j.id} job={j} onSelect={onSelect} />
            ))}
        </div>
    </div>
);

const JobList = ({ onSelect }) => {
    const [tab, setTab] = useState("Ai Matches");
    const rec = sampleJobs.slice(0, 3);
    const recent = sampleJobs.slice(3, 6);

    return (
        <div className="space-y-6">
            <Tabs active={tab} onChange={setTab} />
            <Section title="Recommendation" jobs={rec} onSelect={onSelect} />
            <Section title="Recent Jobs" jobs={recent} onSelect={onSelect} />
        </div>
    );
};

export default JobList;
