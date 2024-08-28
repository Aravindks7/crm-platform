import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./leadSchema";
import PropTypes from "prop-types";
import ClapSpinner from "../../../../components/ui/ClapSpinner";

const formFields = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "leadOwner", label: "Lead Owner", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "title", label: "Title", type: "text" },
  { name: "email", label: "Email", type: "text" },
  { name: "phone", label: "Phone", type: "text" },
  { name: "fax", label: "Fax", type: "text" },
  { name: "mobile", label: "Mobile", type: "text" },
  { name: "website", label: "Website", type: "text" },
  { name: "leadSource", label: "Lead Source", type: "select", options: ['Website', 'Referral', 'Advertisement', 'Social Media', 'Email Campaign', 'Cold Call', 'Event']},
  { name: "leadStatus", label: "Lead Status", type: "select", options: ['New', 'Contacted', 'Qualified', 'Unqualified', 'Converted', 'Lost'] },
  { name: "industry", label: "Industry", type: "select", options: ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Consulting', 'Real Estate'] },
  { name: "numberOfEmployees", label: "No. of Employees", type: "text" },
  { name: "annualRevenue", label: "Annual Revenue", type: "text" },
  { name: "rating", label: "Rating", type: "select", options: ['Hot', 'Warm', 'Cold']},
  { name: "twitter", label: "Twitter", type: "text" },
  { name: "skypeId", label: "Skype ID", type: "text" },
  { name: "secondaryEmail", label: "Secondary Email", type: "text" },
  
  { name: "emailOptOut", label: "Email Opt Out", type: "checkbox" },
];

const LeadsForm = ({ closeModal }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingNew, setIsSavingNew] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const actionType = event.nativeEvent.submitter.name;

    if (actionType === "save") {
      setIsSaving(true);
    } else if (actionType === "saveAndNew") {
      setIsSavingNew(true);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Data successfully saved:", data);

    setIsSaving(false);
    setIsSavingNew(false);

    if (actionType === "saveAndNew") {
      reset();
    } else {
      closeModal();
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="pt-20">
        <div className="overflow-y-auto max-h-[540px] p-4">
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Create Lead</h2>
            <div className="flex space-x-2 h-10">
              <button
                type="submit"
                name="save"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled"
                disabled={isSaving || isSavingNew}
              >
                {isSaving ? <ClapSpinner /> : "Save"}
              </button>
              <button
                type="submit"
                name="saveAndNew"
                className="w-full bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 min-w-[150px]"
                disabled={isSaving || isSavingNew}
              >
                {isSavingNew ? <ClapSpinner /> : "Save and New"}
              </button>
              <button
                type="button"
                className="w-full bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
                onClick={closeModal}
                disabled={isSaving || isSavingNew}
              >
                Cancel
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-6">Lead Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {formFields.map(({ name, label, type, options }) => (
              <div key={name} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                  {label}
                </label>
                <Controller
                  name={name}
                  control={control}
                  render={({ field }) => (
                    type === "select" ? (
                      <select
                        id={name}
                        {...field}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[name] ? "border-red-500" : ""}`}
                      >
                        <option value="">Select {label}</option>
                        {options && options.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : type === "checkbox" ? (
                      <input
                        type={type}
                        id={name}
                        {...field}
                        checked={field.value || false}
                        className="shadow border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-4 w-4"
                      />
                    ) : (
                      <input
                        type={type}
                        id={name}
                        placeholder={label}
                        {...field}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[name] ? "border-red-500" : ""}`}
                      />
                    )
                  )}
                />
                {errors[name] && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors[name].message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

LeadsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LeadsForm;
