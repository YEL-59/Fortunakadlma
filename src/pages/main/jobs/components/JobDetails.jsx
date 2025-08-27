import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ResumePicker from "./ResumePicker";
import { useJobs } from "../JobsProvider";

const Chip = ({ children, color = "default" }) => (
    <span className={`text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full border ${color === 'green' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>{children}</span>
);

const Tabs = ({ active, onChange }) => {
    const items = ["Overview", "Detail", "Company"];
    return (
        <div className="flex gap-1 sm:gap-2 bg-white rounded-full p-1 w-max mx-auto">
            {items.map((t) => (
                <button
                    key={t}
                    onClick={() => onChange(t)}
                    className={`px-2 sm:px-3 md:px-4 py-1.5 rounded-full text-xs sm:text-sm ${active === t ? "bg-sky-500 text-white" : "text-slate-600"}`}
                >
                    {t}
                </button>
            ))}
        </div>
    );
};

const JobDetails = ({ job, onBack, onApplied }) => {
    const { submitApplication, state } = useJobs();
    const [selection, setSelection] = useState({ resumeId: null, coverLetterId: null });
    const [tab, setTab] = useState("Overview");
    const [mode, setMode] = useState("read"); // read | apply

    if (!job) return null;

    const onSelect = (patch) => setSelection((s) => ({ ...s, ...patch }));

    const handleApply = () => {
        if (state.resumes.length === 0) {
            setMode("apply");
            return;
        }
        setMode("apply");
    };

    const doSubmit = () => {
        if (!selection.resumeId && state.resumes[0]) selection.resumeId = state.resumes[0].id;
        if (!selection.resumeId) return;
        const app = {
            id: crypto.randomUUID(),
            jobId: job.id,
            jobTitle: job.title,
            company: job.company,
            resumeId: selection.resumeId,
            coverLetterId: selection.coverLetterId || null,
            status: "submitted",
            appliedAt: Date.now(),
        };
        submitApplication(app);
        onApplied?.(app);
    };

    return (
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="bg-white rounded-2xl border p-4 sm:p-6">
                <div className="text-lg sm:text-xl font-semibold text-center">{job.title}</div>
                <div className="text-sm text-slate-500 text-center">{job.company}, in {job.location}</div>
                <div className="text-xs text-slate-400 text-center mt-1">1 week ago • Over 100 applicants</div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 mt-3 flex-wrap">
                    <Chip color="green">Full-Time</Chip>
                    <Chip>Hybrid</Chip>
                    <Chip>Contract</Chip>
                </div>
            </div>

            <div className="flex justify-center">
                <Tabs active={tab} onChange={setTab} />
            </div>

            {mode === "read" && (
                <>
                    <div className="bg-white rounded-xl border p-4">
                        <div className="text-sm font-semibold mb-1">About the job</div>
                        <p className="text-sm text-slate-600">We are seeking an experienced Operations Manager to lead and streamline daily operations, ensuring efficiency and excellence... </p>
                    </div>

                    <div className="bg-white rounded-xl border p-4">
                        <div className="text-sm font-semibold mb-2">Requirements</div>
                        <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                            <li>Bachelor's degree in related field</li>
                            <li>Proven experience</li>
                            <li>Strong organizational skills</li>
                            <li>Excellent communication</li>
                            <li>Proficiency with operational tools</li>
                        </ul>
                    </div>

                    <div className="pt-2">
                        <Button className="w-full bg-sky-500 hover:bg-sky-600" onClick={handleApply}>Apply Job</Button>
                    </div>
                </>
            )}

            {mode === "apply" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="bg-white rounded-xl border p-4">
                        <div className="text-sm font-semibold mb-2">Select Profile to apply this job</div>
                        <div className="space-y-2">
                            {state.resumes.map((r) => (
                                <label key={r.id} className="flex items-center justify-between border rounded-md p-3">
                                    <div className="text-sm text-slate-700 truncate flex-1 mr-2">{r.name}</div>
                                    <input type="radio" name="resumePick" onChange={() => onSelect({ resumeId: r.id })} />
                                </label>
                            ))}
                            <Button variant="outline" onClick={() => onSelect({ resumeId: null })}>+ Add New</Button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white rounded-xl border p-4">
                            <div className="text-sm font-semibold mb-2">My CVs</div>
                            {selection.resumeId ? (
                                <div className="flex items-center justify-between border rounded-md p-3 text-sm">
                                    <div className="truncate flex-1 mr-2">Selected: {state.resumes.find((r) => r.id === selection.resumeId)?.name}</div>
                                    <div className="text-slate-400 text-xs">Change from left</div>
                                </div>
                            ) : (
                                <ResumePicker onSelected={onSelect} />
                            )}
                        </div>
                        <div className="pt-2">
                            <Button className="w-full bg-sky-500 hover:bg-sky-600" onClick={doSubmit} disabled={!selection.resumeId}>Submit Application</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
