import { useFormContext, useWatch } from "react-hook-form";

const ResumePreview = () => {
  const { control, setValue } = useFormContext();
  const values = useWatch({ control }) || {};

  const {
    experiences = [],
    education: educations = [],
    skills = [],
    projects = [],
    certifications = [],
    interests = [],
    social_links: socialLinks = {},
  } = values;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 shadow-lg text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex mb-8">
        <div className="w-40">
          <h3 className="text-base font-semibold font-trirong tracking-wide">
            Summary
          </h3>
        </div>
        <div>
          {values?.imagePreview && (
            <img
              src={values.imagePreview}
              alt="Profile"
              className="w-24 h-24 object-cover rounded border dark:border-gray-600"
            />
          )}
          <h1
            className="text-3xl font-bold mb-2 font-trirong outline-none"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => {
              const fullName = e.currentTarget.innerText.trim();
              const [first = "", ...rest] = fullName.split(" ");
              setValue("firstName", first, { shouldDirty: true });
              setValue("lastName", rest.join(" "), { shouldDirty: true });
            }}
          >
            {(values.firstName || "Fred") + " " + (values.lastName || "Lynch")}
          </h1>
          <p
            className="text-lg font-poppins text-gray-600 dark:text-gray-300"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setValue("job_title", e.currentTarget.innerText)}
          >
            {values.job_title || "Web Developer"}
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <Section label="Contacts">
        <p>
          <EditableField
            name="address"
            defaultValue={values.address || "2207 Beach"}
          />
          <EditableField name="city" defaultValue={values.city || "Avenue"} />
          <EditableField
            name="state"
            defaultValue={values.state || "Los Angeles"}
          />
        </p>
        <EditableField
          name="email"
          defaultValue={values.email || "fredlynch@mail.me"}
        />
        <EditableField
          name="phone"
          defaultValue={values.phone || "(914) 479-6342"}
        />
      </Section>

      {/* Profile Summary */}
      <Section label="Profile">
        <EditableField
          name="summary"
          defaultValue={
            values.summary ||
            "Graphic designer with +8 years of experience in branding and print design..."
          }
        />
      </Section>

      {/* Education */}
      <Section label="Education">
        {educations.map((edu, idx) => (
          <div key={idx} className="border-b pb-4 last:border-none">
            <p className="text-base font-medium">
              {edu.degree || "Degree"}{" "}
              <span className="text-gray-600">
                {edu.institution || "Institution"}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              {edu.startDate || "Start"} - {edu.endDate || "End"} |{" "}
              {edu.location || "Location"}
            </p>
            {edu.description && (
              <p className="text-sm mt-1">{edu.description}</p>
            )}
          </div>
        ))}
      </Section>

      {/* Employment */}
      <Section label="Employment">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-b pb-4 last:border-none">
            <p className="text-base font-medium">
              {exp.title || "Job Title"}{" "}
              <span className="text-gray-600">{exp.company || "Company"}</span>
            </p>
            <p className="text-sm text-gray-600">
              {exp.startDate || "Start"} - {exp.endDate || "End"} |{" "}
              {exp.location || "Location"}
            </p>
            <p className="text-sm italic text-gray-500">{exp.jobType || ""}</p>
            <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
              {(exp.points || []).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section label="Projects" gridCols={2}>
        {projects.map((pro, idx) => (
          <div key={idx} className="border-b pb-4 last:border-none">
            <p className="text-base font-medium">{pro.name || "Project"}</p>
            <p className="text-sm italic text-gray-500">
              {pro.description || ""}
            </p>
            {pro.url && (
              <a
                href={pro.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                {pro.url}
              </a>
            )}
            <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
              {(pro.points || []).map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Certifications */}
      <Section label="Certifications" gridCols={2}>
        {certifications.map((cert, idx) => (
          <div key={idx} className="border-b pb-4 last:border-none">
            <p className="text-base font-medium">
              {cert.certificationName || "Certification"}
            </p>
            <p className="text-sm text-gray-600">
              {cert.issuingOrganization || "Org"} • {cert.dateEarned || "Date"}
              {cert.expirationDate && (
                <span> — Expires: {cert.expirationDate}</span>
              )}
            </p>
            {cert.credentialId && (
              <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
            )}
            {cert.certificationURL && (
              <a
                href={cert.certificationURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                View Certification
              </a>
            )}
            {cert.notes && (
              <p className="text-sm italic text-gray-500 mt-1">{cert.notes}</p>
            )}
          </div>
        ))}
      </Section>

      {/* Skills */}
      <Section label="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) =>
            typeof skill === "string" ? (
              <span
                key={idx}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ) : (
              <div key={idx} className="mb-2 w-full">
                <h4 className="font-semibold">{skill.title}</h4>
                {skill.description && (
                  <p className="text-xs text-gray-500 mb-1">
                    {skill.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {skill.badges?.map((b, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {b.name}{" "}
                      <span className="italic text-xs">({b.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </Section>

      {/* Interests */}
      <Section label="Interests">
        {interests.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {interests.map((i, idx) => (
              <li
                key={idx}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {i.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs italic text-gray-500">
            No interests added yet.
          </p>
        )}
      </Section>

      {/* Social Links */}
      <Section label="Social Links">
        {socialLinks && Object.keys(socialLinks).length > 0 ? (
          <ul className="space-y-2 text-sm">
            {["linkedin", "github", "twitter", "website"].map((key) =>
              socialLinks[key] ? (
                <li key={key}>
                  <strong className="inline-block w-20 capitalize">
                    {key}:
                  </strong>
                  <a
                    href={socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 underline"
                  >
                    {socialLinks[key]}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p className="text-xs italic text-gray-500">
            No social links added yet.
          </p>
        )}
      </Section>
    </div>
  );
};

export default ResumePreview;

/* -----------------------------
   Helper Components
------------------------------*/
const Section = ({ label, children, gridCols = 1 }) => (
  <div
    className={`mb-8 grid ${gridCols > 1 ? `grid-cols-${gridCols} gap-6` : ""}`}
  >
    <div className="w-40 flex-shrink-0">
      <h3 className="text-sm font-semibold font-poppins tracking-wide text-gray-900 dark:text-gray-100">
        {label}
      </h3>
    </div>
    <div className="flex-1">{children}</div>
  </div>
);

const EditableField = ({ name, defaultValue }) => {
  const { setValue } = useFormContext();
  return (
    <span
      contentEditable
      suppressContentEditableWarning
      onInput={(e) => setValue(name, e.currentTarget.innerText)}
      className="text-sm text-gray-700 dark:text-gray-300"
    >
      {defaultValue}
    </span>
  );
};
