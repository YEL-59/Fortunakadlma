import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";

const SectionHeader = ({ title, onAdd }) => (
    <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <Button size="sm" onClick={onAdd}>Add</Button>
    </div>
);

const ItemRow = ({ primary, secondary, onEdit }) => (
    <div className="p-3 rounded-lg border bg-white flex items-start justify-between">
        <div>
            <div className="font-medium text-slate-900">{primary}</div>
            <div className="text-xs text-slate-500">{secondary}</div>
        </div>
        <Button size="sm" variant="outline" onClick={onEdit}>Edit</Button>
    </div>
);

export const EducationSection = ({ onOpen }) => {
    const { control } = useFormContext();
    const { fields } = useFieldArray({ control, name: "education" });
    return (
        <div className="space-y-2">
            <SectionHeader title="Education" onAdd={() => onOpen("education")} />
            {fields.length === 0 ? (
                <div className="text-sm text-slate-500">No education added yet.</div>
            ) : (
                fields.map((ed, idx) => (
                    <ItemRow
                        key={ed.id}
                        primary={`${ed.degree || "Degree"} • ${ed.institution || "Institution"}`}
                        secondary={`${ed.start || ""} - ${ed.end || ""}`}
                        onEdit={() => onOpen("education", idx)}
                    />
                ))
            )}
        </div>
    );
};

export const ExperienceSection = ({ onOpen }) => {
    const { control } = useFormContext();
    const { fields } = useFieldArray({ control, name: "experience" });
    return (
        <div className="space-y-2">
            <SectionHeader title="Experience" onAdd={() => onOpen("experience")} />
            {fields.length === 0 ? (
                <div className="text-sm text-slate-500">No experience added yet.</div>
            ) : (
                fields.map((ex, idx) => (
                    <ItemRow
                        key={ex.id}
                        primary={`${ex.role || "Role"} • ${ex.company || "Company"}`}
                        secondary={`${ex.start || ""} - ${ex.end || ""}`}
                        onEdit={() => onOpen("experience", idx)}
                    />
                ))
            )}
        </div>
    );
};

export const SkillsSection = ({ onOpen }) => {
    const { control } = useFormContext();
    const { fields } = useFieldArray({ control, name: "skills" });
    return (
        <div className="space-y-2">
            <SectionHeader title="Skills" onAdd={() => onOpen("skills")} />
            {fields.length === 0 ? (
                <div className="text-sm text-slate-500">No skills added yet.</div>
            ) : (
                <div className="flex flex-wrap gap-2">
                    {fields.map((sk, idx) => (
                        <button
                            key={sk.id}
                            className="px-3 py-1 rounded-full border text-sm"
                            onClick={() => onOpen("skills", idx)}
                        >
                            {sk.name || "Skill"}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export const ProjectsSection = ({ onOpen }) => {
    const { control } = useFormContext();
    const { fields } = useFieldArray({ control, name: "projects" });
    return (
        <div className="space-y-2">
            <SectionHeader title="Projects" onAdd={() => onOpen("projects")} />
            {fields.length === 0 ? (
                <div className="text-sm text-slate-500">No projects added yet.</div>
            ) : (
                fields.map((pr, idx) => (
                    <ItemRow
                        key={pr.id}
                        primary={pr.title || "Project title"}
                        secondary={pr.summary || ""}
                        onEdit={() => onOpen("projects", idx)}
                    />
                ))
            )}
        </div>
    );
};
