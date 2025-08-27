import React, { useState } from "react";
import { JobsProvider } from "./JobsProvider";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import ApplicationTracker from "./components/ApplicationTracker";

const Jobs = () => {
    const [selected, setSelected] = useState(null);
    const [view, setView] = useState("list"); // list | details | tracker

    const handleSelect = (job) => {
        setSelected(job);
        setView("details");
    };

    const handleApplied = () => {
        setView("tracker");
    };

    return (
        <JobsProvider>
            <div className="min-h-screen bg-slate-100 p-2 sm:p-3 md:p-4">
                <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
                    {view === "list" && <JobList onSelect={handleSelect} />}
                    {view === "details" && (
                        <JobDetails job={selected} onBack={() => setView("list")} onApplied={handleApplied} />
                    )}
                    {view === "tracker" && <ApplicationTracker />}
                </div>
            </div>
        </JobsProvider>
    );
};

export default Jobs;