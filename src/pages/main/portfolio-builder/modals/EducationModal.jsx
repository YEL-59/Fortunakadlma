import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EducationModal = ({ open, onOpenChange, editIndex = null }) => {
    const { control, register, getValues, setValue } = useFormContext();
    const { fields, append, update } = useFieldArray({ control, name: "education" });

    useEffect(() => {
        if (open && editIndex == null) {
            setValue("_eduTemp", { degree: "", institution: "", start: "", end: "" });
        } else if (open && editIndex != null) {
            setValue("_eduTemp", fields[editIndex]);
        }
    }, [open, editIndex]);

    const onSave = () => {
        const data = getValues("_eduTemp");
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
                    <DialogTitle>{editIndex == null ? "Add Education" : "Edit Education"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                    <Input placeholder="Degree" {...register("_eduTemp.degree")} />
                    <Input placeholder="Institution" {...register("_eduTemp.institution")} />
                    <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="Start" {...register("_eduTemp.start")} />
                        <Input placeholder="End" {...register("_eduTemp.end")} />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button onClick={onSave}>Save</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EducationModal;
