import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "jobsState";

const defaultState = {
    resumes: [], // { id, name, createdAt, dataUrl? }
    coverLetters: [], // { id, name, content, createdAt }
    applications: [], // { id, jobId, jobTitle, company, resumeId, coverLetterId, status, appliedAt }
};

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : defaultState;
    } catch (e) {
        console.error("Failed to parse jobs state", e);
        return defaultState;
    }
}

const JobsContext = createContext(null);

export const JobsProvider = ({ children }) => {
    const initial = useMemo(() => loadState(), []);
    const [state, setState] = useState(initial);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error("Failed to save jobs state", e);
        }
    }, [state]);

    const addResume = (resume) => {
        setState((s) => ({ ...s, resumes: [{ ...resume }, ...s.resumes] }));
    };

    const addCoverLetter = (letter) => {
        setState((s) => ({ ...s, coverLetters: [{ ...letter }, ...s.coverLetters] }));
    };

    const submitApplication = (app) => {
        setState((s) => ({ ...s, applications: [{ ...app }, ...s.applications] }));
    };

    const updateApplicationStatus = (id, status) => {
        setState((s) => ({
            ...s,
            applications: s.applications.map((a) => (a.id === id ? { ...a, status } : a)),
        }));
    };

    const value = {
        state,
        addResume,
        addCoverLetter,
        submitApplication,
        updateApplicationStatus,
    };

    return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};

export const useJobs = () => {
    const ctx = useContext(JobsContext);
    if (!ctx) throw new Error("useJobs must be used within JobsProvider");
    return ctx;
};
