import React, { useRef, useState } from "react";
import { PortfolioFormProvider } from "./PortfolioFormProvider";
import ProfileHeader from "./components/ProfileHeader";
import PortfolioList from "./components/PortfolioList";
import { EducationSection, ExperienceSection, SkillsSection, ProjectsSection } from "./components/Sections";
import EducationModal from "./modals/EducationModal";
import ExperienceModal from "./modals/ExperienceModal";
import SkillsModal from "./modals/SkillsModal";
import ProjectModal from "./modals/ProjectModal";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

const Pills = ({ onOpen, onUpload }) => {
    return (
        <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-full justify-center" onClick={() => onOpen("projects")}>Add Project</Button>
                <Button variant="outline" className="rounded-full justify-center" onClick={() => onOpen("experience")}>Add Experience</Button>
                <Button variant="outline" className="rounded-full justify-center" onClick={() => onOpen("skills")}>Add Skills</Button>
                <Button variant="outline" className="rounded-full justify-center" onClick={() => onOpen("education")}>Add Education</Button>
            </div>
            <Button variant="outline" className="rounded-full w-full justify-center" onClick={onUpload}>Upload your resume</Button>
        </div>
    );
};

const HeaderBar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-600">Portfolio Builder</div>
            <Button variant="outline" className="rounded-full">View resume</Button>
        </div>
    );
};

const Content = ({ openModal }) => {
    const { setValue } = useFormContext();
    const fileRef = useRef(null);

    const handleUpload = () => fileRef.current?.click();
    const onFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setValue("profile.resumeName", file.name, { shouldDirty: true, shouldTouch: true });
    };

    return (
        <>
            <HeaderBar />
            <div className="mt-6" />
            <ProfileHeader />
            <div className="mt-6" />
            <Pills onOpen={openModal} onUpload={handleUpload} />
            <input type="file" ref={fileRef} onChange={onFileChange} className="hidden" />
            <div className="mt-8" />
            <PortfolioList />
            <div className="mt-6 space-y-6">
                <EducationSection onOpen={openModal} />
                <ExperienceSection onOpen={openModal} />
                <SkillsSection onOpen={openModal} />
                <ProjectsSection onOpen={openModal} />
            </div>
        </>
    );
};

const PortfolioBuilder = () => {
    const [modal, setModal] = useState({ type: null, open: false, index: null });

    const openModal = (type, index = null) => setModal({ type, open: true, index });
    const closeModal = () => setModal({ type: null, open: false, index: null });

    return (
        <PortfolioFormProvider>
            <div className="min-h-screen bg-slate-100 p-4">
                <div className="max-w-3xl mx-auto space-y-6">
                    <Content openModal={openModal} />
                </div>
            </div>

            {modal.type === "education" && (
                <EducationModal open={modal.open} onOpenChange={closeModal} editIndex={modal.index} />
            )}
            {modal.type === "experience" && (
                <ExperienceModal open={modal.open} onOpenChange={closeModal} editIndex={modal.index} />
            )}
            {modal.type === "skills" && (
                <SkillsModal open={modal.open} onOpenChange={closeModal} editIndex={modal.index} />
            )}
            {modal.type === "projects" && (
                <ProjectModal open={modal.open} onOpenChange={closeModal} editIndex={modal.index} />
            )}
        </PortfolioFormProvider>
    );
};

export default PortfolioBuilder;