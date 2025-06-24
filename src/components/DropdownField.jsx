import { Icon } from "@iconify/react";

const DropdownField = ({
  label,
  icon,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Pilih...",
  error,
  ...props
}) => (
  <div className="flex flex-col gap-2 mt-2 w-full">
    {label && (
      <div className="flex items-center gap-2">
        {icon && <Icon icon={icon} className="text-black" />}
        <span className="font-semibold">{label}</span>
      </div>
    )}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border-2 rounded-lg p-2 focus:outline-none focus:border-black ${
        error ? "border-red-500" : "border-gray-200"
      }`}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default DropdownField;
