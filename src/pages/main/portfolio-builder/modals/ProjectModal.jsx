import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProjectModal = ({ open, onOpenChange, editIndex = null }) => {
    const { control, register, getValues, setValue } = useFormContext();
    const { fields, append, update } = useFieldArray({ control, name: "projects" });

    useEffect(() => {
        if (open && editIndex == null) {
            setValue("_projTemp", { title: "", summary: "", link: "" });
        } else if (open && editIndex != null) {
            setValue("_projTemp", fields[editIndex]);
        }
    }, [open, editIndex]);

    const onSave = () => {
        const data = getValues("_projTemp");
        if (editIndex == null) {
            append(data);
        } else {
            update(editIndex, data);
        }
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{editIndex == null ? "Add Project" : "Edit Project"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                    <Input placeholder="Project title" {...register("_projTemp.title")} />
                    <Input placeholder="Summary" {...register("_projTemp.summary")} />
                    <Input placeholder="Link (optional)" {...register("_projTemp.link")} />
                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button onClick={onSave}>Save</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
