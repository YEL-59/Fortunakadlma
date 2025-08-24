import React, { useEffect } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const years = Array.from({ length: 60 }, (_, i) => 1980 + i);

const ExperienceModal = ({ open, onOpenChange, editIndex = null }) => {
    const { control, register, getValues, setValue } = useFormContext();
    const { fields, append, update } = useFieldArray({ control, name: "experience" });

    useEffect(() => {
        if (open && editIndex == null) {
            setValue("_expTemp", { role: "", company: "", current: false, startMonth: "", startYear: "", endMonth: "", endYear: "", location: "", locationType: "", description: "" });
        } else if (open && editIndex != null) {
            setValue("_expTemp", fields[editIndex]);
        }
    }, [open, editIndex]);

    const onSave = () => {
        const data = getValues("_expTemp");
        if (editIndex == null) {
            append(data);
        } else {
            update(editIndex, data);
        }
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>{editIndex == null ? "Add Experience" : "Edit Experience"}</DialogTitle>
                    <p className="text-sm text-slate-500">Let's take the next step in your career today</p>
                </DialogHeader>
                <div className="space-y-3">
                    <Input placeholder="Job title" {...register("_expTemp.role")} />
                    <Input placeholder="Company or Organization" {...register("_expTemp.company")} />

                    <label className="flex items-center gap-2 text-sm text-slate-700">
                        <input type="checkbox" {...register("_expTemp.current")} /> I'm currently working in this role
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid grid-cols-2 gap-2">
                            <Select onValueChange={(v) => setValue("_expTemp.startMonth", v)} value={getValues("_expTemp.startMonth") || undefined}>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Month" /></SelectTrigger>
                                <SelectContent>
                                    {months.map((m) => (<SelectItem key={m} value={m}>{m}</SelectItem>))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={(v) => setValue("_expTemp.startYear", v)} value={getValues("_expTemp.startYear") || undefined}>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Year" /></SelectTrigger>
                                <SelectContent>
                                    {years.map((y) => (<SelectItem key={y} value={String(y)}>{y}</SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Select onValueChange={(v) => setValue("_expTemp.endMonth", v)} value={getValues("_expTemp.endMonth") || undefined}>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Month" /></SelectTrigger>
                                <SelectContent>
                                    {months.map((m) => (<SelectItem key={m} value={m}>{m}</SelectItem>))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={(v) => setValue("_expTemp.endYear", v)} value={getValues("_expTemp.endYear") || undefined}>
                                <SelectTrigger className="w-full"><SelectValue placeholder="Year" /></SelectTrigger>
                                <SelectContent>
                                    {years.map((y) => (<SelectItem key={y} value={String(y)}>{y}</SelectItem>))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="Location" {...register("_expTemp.location")} />
                        <Select onValueChange={(v) => setValue("_expTemp.locationType", v)} value={getValues("_expTemp.locationType") || undefined}>
                            <SelectTrigger className="w-full"><SelectValue placeholder="Location type" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="onsite">Onsite</SelectItem>
                                <SelectItem value="remote">Remote</SelectItem>
                                <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Input placeholder="Description" {...register("_expTemp.description")} />

                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button onClick={onSave}>{editIndex == null ? "Add" : "Save"}</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ExperienceModal;
