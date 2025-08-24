import React, { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

const STORAGE_KEY = "portfolioBuilderData";

function loadInitialValues() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return undefined;
        return JSON.parse(raw);
    } catch (err) {
        console.error("Failed to parse portfolio data", err);
        return undefined;
    }
}

const defaultValues = {
    profile: {
        fullName: "",
        email: "",
        phone: "",
        title: "",
        location: "",
        summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
};

export const PortfolioFormProvider = ({ children }) => {
    const initial = useMemo(() => ({ ...defaultValues, ...(loadInitialValues() || {}) }), []);
    const methods = useForm({
        mode: "onChange",
        defaultValues: initial,
    });

    const { watch } = methods;

    useEffect(() => {
        const subscription = watch((values) => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
            } catch (err) {
                console.error("Failed saving portfolio data", err);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return <FormProvider {...methods}>{children}</FormProvider>;
};

export const resetPortfolioStorage = () => localStorage.removeItem(STORAGE_KEY);
