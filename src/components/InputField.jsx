import { Icon } from "@iconify/react";

export default function InputField({
  label,
  icon,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
}) {
  return (
    <div className="flex flex-col gap-2 w-full mt-2">
      {label && (
        <div className="flex items-center">
          {icon && <Icon icon={icon} className="text-lg mr-2" />}
          <span className="font-semibold">{label}</span>
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`border-2 rounded-lg p-2 focus:outline-none 
          ${error ? "border-red-500" : "border-gray-200"} 
          focus:border-black`}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
