import { Icon } from "@iconify/react";

function CardSummary({ icon, label, value, color }) {
  return (
    <div className="bg-white border cursor-pointer border-gray-200 rounded-2xl justify-between px-6 py-4 shadow-sm hover:shadow-md transition-all flex gap-3 items-center">
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-xl font-bold text-gray-800">
          Rp {value.toLocaleString()}
        </div>
      </div>
      <Icon icon={icon} className={`text-3xl ${color}`} />
    </div>
  );
}

export default CardSummary;
