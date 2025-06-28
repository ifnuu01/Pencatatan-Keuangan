import { Icon } from "@iconify/react";
import ICON_OPTIONS from "../constant/iconItems";
const IconPicker = ({ value, onChange, error }) => (
  <div>
    <div className="mb-2 font-semibold mt-4">Pilih Icon</div>
    <div className="grid grid-cols-5 gap-3">
      {ICON_OPTIONS.map((iconCode) => (
        <button
          type="button"
          key={iconCode}
          onClick={() => onChange(iconCode)}
          className={`border rounded-lg p-2 flex items-center justify-center transition cursor-pointer hover:border-black ${
            value === iconCode ? "border-black bg-gray-100" : "border-gray-200"
          }`}
        >
          <Icon icon={iconCode} className="text-2xl" />
        </button>
      ))}
    </div>
    {value && (
      <div className="mt-2 text-sm text-gray-500">
        Kode icon: <span className="font-mono">{value}</span>
      </div>
    )}
    {error && <span className="text-sm text-red-600">{error}</span>}
  </div>
);

export default IconPicker;
