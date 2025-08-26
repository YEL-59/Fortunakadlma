import React, { useState } from "react";
import { useJobs } from "../JobsProvider";
import ApplicationTimeline from "./ApplicationTimeline";

const ApplicationTracker = () => {
    const { state } = useJobs();
    const [activeId, setActiveId] = useState(state.applications[0]?.id || null);

    const active = state.applications.find((a) => a.id === activeId);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-2">
                <div className="text-lg font-semibold">Applications</div>
                {state.applications.map((a) => (
                    <button
                        key={a.id}
                        className={`w-full text-left border rounded-md p-3 bg-white ${activeId === a.id ? "border-sky-400" : ""}`}
                        onClick={() => setActiveId(a.id)}
                    >
                        <div className="font-medium text-slate-900">{a.jobTitle}</div>
                        <div className="text-xs text-slate-500">{a.company}</div>
                    </button>
                ))}
            </div>
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border p-6">
                    <div className="text-sm font-semibold mb-4">State Tracking</div>
                    {active ? (
                        <ApplicationTimeline application={active} />
                    ) : (
                        <div className="text-sm text-slate-500">Select an application to view its timeline.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicationTracker;
