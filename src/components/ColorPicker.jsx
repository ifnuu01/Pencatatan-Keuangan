const COLOR_OPTIONS = [
  "bg-red-600", // merah
  "bg-yellow-400", // kuning
  "bg-green-400", // hijau
  "bg-blue-400", // biru
  "bg-purple-400", // ungu
  "bg-pink-400", // pink
  "bg-yellow-300", // gold
  "bg-gray-400", // abu
  "bg-black", // hitam
  "bg-white", // putih
];

const ColorPicker = ({ value, onChange, error }) => (
  <div>
    <div className="mb-2 font-semibold mt-4">Pilih Warna</div>
    <div className="flex gap-2 flex-wrap">
      {COLOR_OPTIONS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => onChange(color)}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition cursor-pointer hover:border-black
            ${value === color ? "border-black scale-110" : "border-gray-200"}
            ${color}
          `}
        />
      ))}
    </div>
    {value && (
      <div className="mt-2 text-sm text-gray-500">
        Kode warna: <span className="font-mono">{value}</span>
      </div>
    )}
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);

export default ColorPicker;
