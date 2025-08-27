import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useJobs } from "../JobsProvider";
import ApplicationTimeline from "./ApplicationTimeline";

const ApplicationTracker = () => {
    const { state } = useJobs();
    const [selected, setSelected] = useState(state.applications[0] || null);

    if (state.applications.length === 0) {
        return (
            <div className="bg-white rounded-xl border p-6 sm:p-8 text-center">
                <div className="text-lg font-semibold text-slate-900 mb-2">No Applications Yet</div>
                <div className="text-sm text-slate-600 mb-4">Start applying to jobs to track your progress here</div>
                <Button className="bg-sky-500 hover:bg-sky-600">Browse Jobs</Button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Left: Application List */}
            <div className="bg-white rounded-xl border p-3 sm:p-4">
                <div className="text-sm font-semibold mb-3">My Applications</div>
                <div className="space-y-2">
                    {state.applications.map((app) => (
                        <button
                            key={app.id}
                            onClick={() => setSelected(app)}
                            className={`w-full text-left p-3 rounded-lg border transition ${selected?.id === app.id
                                ? "border-sky-200 bg-sky-50"
                                : "border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            <div className="text-sm font-medium text-slate-900 truncate">{app.jobTitle}</div>
                            <div className="text-xs text-slate-500 truncate">{app.company}</div>
                            <div className="text-xs text-sky-600 mt-1">Applied {new Date(app.appliedAt).toLocaleDateString()}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Timeline */}
            <div className="bg-white rounded-xl border p-3 sm:p-4">
                <div className="text-sm font-semibold mb-4">Application Status</div>
                {selected ? (
                    <ApplicationTimeline application={selected} />
                ) : (
                    <div className="text-sm text-slate-500 text-center py-8">Select an application to view its status</div>
                )}
            </div>
        </div>
    );
};

export default ApplicationTracker;
