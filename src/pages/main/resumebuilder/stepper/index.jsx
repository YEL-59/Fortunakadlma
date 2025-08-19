// components/ResumeBuilderStepper.jsx
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useLocation } from "react-router";
import YourDetails from "../steps/yourdetails";

import ExperienceSection from "../steps/experiencesection";
import EducationSection from "../steps/educationsection";
import SkillsSection from "../steps/skillssection";
import CVTemplateGallery from "../steps/cvtemplategallery";

import { useResume } from "../resumeContext";

const steps = ["Your Details", "Experience", "Education", "Skills", "Template"];

const ResumeBuilderStepper = () => {
  const { setFormData } = useResume();
  const location = useLocation();

  const generatedResume = location.state?.generatedResume;
  const passedData = location.state?.resumeData || null;
  const generatedSummary =
    location?.state?.summary || localStorage.getItem("resumeSummary") || "";

  const resumeData = passedData || null;

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: generatedSummary,
      job_title: "",
      address: "",
      city: "",
      state: "",
      website: "",
      experiences: [],
      education: [],
      certifications: [],
      projects: [],
      skills: [],
      social_links: {
        linkedin: "",
        github: "",
        twitter: "",
        website: "",
      },
      interests: [],
    },
  });

  // Auto-fill form from resume or generatedResume
  useEffect(() => {
    if (generatedResume) {
      methods.reset({
        firstName: generatedResume.full_name?.split(" ")[0] || "",
        lastName: generatedResume.full_name?.split(" ")[1] || "",
        email: generatedResume.email || "",
        phone: generatedResume.phone || "",
        linkedin: generatedResume.social_links?.linkedin || "",
        summary: generatedResume.summary?.profile || "",
        job_title: generatedResume.job_title || "",
        address: generatedResume.address || "",
        state: "",
        city: "",
        website: generatedResume.website || "",
        experiences: generatedResume.experience || [],
        education: generatedResume.education || [],
        certifications: generatedResume.certifications || [],
        projects: generatedResume.projects || [],
        skills: generatedResume.skills || [],
        social_links: generatedResume.social_links || {
          linkedin: "",
          github: "",
          twitter: "",
          website: "",
        },
        interests: generatedResume.interests || [],
      });
    } else if (resumeData) {
      methods.reset({
        firstName: resumeData.user_profile?.full_name?.split(" ")[0] || "",
        lastName: resumeData.user_profile?.full_name?.split(" ")[1] || "",
        email: resumeData.user_profile?.email || "",
        phone: resumeData.user_profile?.phone || "",
        linkedin: resumeData.user_profile?.social_links?.linkedin || "",
        summary: resumeData.user_profile?.summary?.profile || "",
        job_title: resumeData.user_profile?.job_title || "",
        address: resumeData.user_profile?.address || "",
        state: resumeData.user_profile?.state || "",
        city: resumeData.user_profile?.city || "",
        website: resumeData.user_profile?.website || "",
        experiences: resumeData.user_profile?.experience || [],
        education: resumeData.user_profile?.education || [],
        certifications: resumeData.user_profile?.certifications || [],
        projects: resumeData.user_profile?.projects || [],
        skills: resumeData.user_profile?.skills || [],
        social_links: resumeData.user_profile?.social_links || {
          linkedin: "",
          github: "",
          twitter: "",
          website: "",
        },
        interests: resumeData.user_profile?.interests || [],
      });
    }
  }, [generatedResume, resumeData, methods]);

  const initialStep = location.state?.startStep ?? 0;
  const [step, setStep] = useState(initialStep);

  const StepComponent = [
    YourDetails,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    CVTemplateGallery,
  ][step];

  const next = methods.handleSubmit((data) => {
    console.log(`📌 Step ${step + 1} Data:`, data);
    setStep((s) => Math.min(s + 1, steps.length - 1));
  });

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data) => {
    console.log("🎉 Final Resume Data:", data);
    setFormData(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-6 space-y-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
      >
        {/* Stepper Navigation */}
        <div className="flex w-full overflow-x-auto gap-2">
          {steps.map((label, index) => {
            const isActive = index === step;
            return (
              <div
                key={index}
                className={`relative flex items-center px-6 py-3.5 text-sm font-medium select-none
                  ${
                    isActive
                      ? "bg-white text-[#1e3a8a] z-10 scale-105"
                      : "bg-blue-50 text-gray-500 hover:text-blue-700 cursor-pointer"
                  }
                  transition-transform duration-300 ease-in-out
                  ${index === 0 ? "rounded-l-full" : ""}
                  ${index === steps.length - 1 ? "rounded-r-full" : ""}
                  after:absolute after:top-0 after:right-0 after:h-full after:w-4
                  ${
                    index < steps.length - 1
                      ? isActive
                        ? "after:bg-white after:clip-path-triangle-right"
                        : "after:bg-blue-50 after:clip-path-triangle-right"
                      : "after:hidden"
                  }`}
                style={{
                  clipPath:
                    index === 0
                      ? "polygon(0 0, 95% 0%, 100% 50%, 95% 100%, 0 100%)"
                      : index === steps.length - 1
                      ? "polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 5% 50%)"
                      : "polygon(0 0, 95% 0%, 100% 50%, 95% 100%, 0 100%, 5% 50%)",
                  transition: "clip-path 0.3s ease-in-out",
                }}
                onClick={methods.handleSubmit((data) => {
                  console.log(`📌 Step ${step + 1} Data:`, data);
                  setStep(index);
                })}
              >
                {label}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 gap-6">
          <StepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Back
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 rounded hover:scale-105 transition"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white dark:bg-green-500 dark:hover:bg-green-600 rounded hover:scale-105 transition"
            >
              Save Resume
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ResumeBuilderStepper;
