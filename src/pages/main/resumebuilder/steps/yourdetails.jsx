import { useFormContext, useWatch } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const YourDetails = () => {
  const methods = useFormContext();
  const { control, setValue } = methods;
  const values = useWatch({ control });
  const summary = values.summary || "";
  const refinePrompt = values.refinePrompt || "";

  const [showRefine, setShowRefine] = useState(false);

  const handleUpdateClick = () => {
    if (!showRefine) {
      setShowRefine(true);
      return;
    }
    if (!refinePrompt) return;

    // API-free version: just update summary locally
    setValue("summary", `${summary} ${refinePrompt}`);
    setValue("refinePrompt", "");
    setShowRefine(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      const previewUrl = URL.createObjectURL(file);
      setValue("imagePreview", previewUrl);
    }
  };

  const onSubmit = (data) => {
    console.log("YourDetails submitted:", data);
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
    >
      {/* Left Form */}
      <div className="space-y-4 bg-white dark:bg-gray-800 rounded p-6 h-full text-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold mb-6">Contact Information</h1>

        {/* Image Upload */}
        <div>
          <FormLabel>Profile Image</FormLabel>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1"
          />
          {values?.imagePreview && (
            <img
              src={values.imagePreview}
              alt="Profile Preview"
              className="mt-2 w-24 h-24 object-cover rounded-full border dark:border-gray-600"
            />
          )}
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            name="firstName"
            label="First Name*"
            placeholder="Nazmul"
          />
          <TextInput name="lastName" label="Last Name*" placeholder="Hasan" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            name="email"
            label="Email*"
            placeholder="example@mail.com"
          />
          <TextInput name="phone" label="Phone*" placeholder="88017724999675" />
        </div>

        <TextInput
          name="job_title"
          label="Job Title"
          placeholder="Web Developer"
        />
        <TextInput
          name="linkedin"
          label="LinkedIn"
          placeholder="linkedin.com/in/..."
        />

        {/* AI Summary */}
        <div className="space-y-4">
          <label className="block text-sm font-medium mb-1">
            AI Generated Summary
          </label>
          <Textarea
            value={summary}
            onChange={(e) => setValue("summary", e.target.value)}
            placeholder="Your AI-generated resume summary will appear here..."
            rows={6}
            className="dark:bg-gray-700 dark:text-gray-100"
          />

          {showRefine && (
            <Textarea
              value={refinePrompt}
              onChange={(e) => setValue("refinePrompt", e.target.value)}
              placeholder="e.g. Make it more concise, highlight skills..."
              rows={3}
              className="mb-2 dark:bg-gray-700 dark:text-gray-100"
            />
          )}

          <Button
            type="button"
            onClick={handleUpdateClick}
            disabled={showRefine && !refinePrompt}
          >
            {showRefine ? "Apply Changes" : "Update Summary"}
          </Button>
        </div>

        {/* Address Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <TextInput name="address" label="Address" placeholder="123 Street" />
          <TextInput name="city" label="City" placeholder="Sylhet" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput name="state" label="State" placeholder="Dhaka" />
          <TextInput
            name="website"
            label="Website"
            placeholder="www.example.com"
          />
        </div>
      </div>

      {/* Right Preview */}
      <div className="rounded p-2 h-full text-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-medium mb-4 font-poppins">Preview</h1>
        {/* <ResumePreview values={values} /> */}
      </div>
    </form>
  );
};

export default YourDetails;

/* -----------------------
   Reusable Inputs
------------------------*/
const TextInput = ({ name, label, placeholder }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="dark:bg-gray-700 dark:text-gray-100"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

const TextAreaInput = ({ name, label, placeholder }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="dark:bg-gray-700 dark:text-gray-100"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
