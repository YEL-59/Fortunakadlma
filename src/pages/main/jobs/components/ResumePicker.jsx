import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useJobs } from "../JobsProvider";

const ResumePicker = ({ onSelected }) => {
    const { state, addResume, addCoverLetter } = useJobs();
    const fileRef = useRef(null);
    const [coverText, setCoverText] = useState("");

    const onUploadClick = () => fileRef.current?.click();
    const onFileChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const resume = { id: crypto.randomUUID(), name: f.name, createdAt: Date.now() };
        addResume(resume);
        onSelected({ resumeId: resume.id });
    };

    const onSaveCover = () => {
        if (!coverText.trim()) return;
        const letter = { id: crypto.randomUUID(), name: `Cover-${new Date().toLocaleDateString()}`, content: coverText, createdAt: Date.now() };
        addCoverLetter(letter);
        onSelected({ coverLetterId: letter.id });
    };

    return (
        <div className="space-y-3">
            <div className="text-sm font-medium">Your resumes</div>
            <div className="flex flex-wrap gap-2">
                {state.resumes.map((r) => (
                    <Button key={r.id} variant="outline" onClick={() => onSelected({ resumeId: r.id })}>{r.name}</Button>
                ))}
                <Button onClick={onUploadClick}>Upload new</Button>
                <input type="file" ref={fileRef} className="hidden" onChange={onFileChange} />
            </div>
            <div className="space-y-2">
                <div className="text-sm font-medium">Cover letter</div>
                <textarea
                    value={coverText}
                    onChange={(e) => setCoverText(e.target.value)}
                    placeholder="Write a short cover letter..."
                    className="w-full h-28 border rounded-md p-2 text-sm"
                />
                <div className="flex gap-2">
                    <Button variant="outline" onClick={onSaveCover}>Save cover letter</Button>
                </div>
            </div>
        </div>
    );
};

export default ResumePicker;
