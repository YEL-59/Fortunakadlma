import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SkillsModal = ({ open, onOpenChange, editIndex = null }) => {
    const { control, register, getValues, setValue } = useFormContext();
    const { fields, append, update } = useFieldArray({ control, name: "skills" });

    useEffect(() => {
        if (open && editIndex == null) {
            setValue("_skillTemp", { name: "" });
        } else if (open && editIndex != null) {
            setValue("_skillTemp", fields[editIndex]);
        }
    }, [open, editIndex]);

    const onSave = () => {
        const data = getValues("_skillTemp");
        if (editIndex == null) {
            append(data);
        } else {
            update(editIndex, data);
        }
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>{editIndex == null ? "Add Skill" : "Edit Skill"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                    <Input placeholder="Skill name" {...register("_skillTemp.name")} />
                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button onClick={onSave}>Save</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SkillsModal;
