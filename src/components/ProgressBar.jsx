export default function ProgressBar({ total_expense = 0, amount = 0 }) {
  const progress = total_expense > 0 ? (total_expense / amount) * 100 : 0;

  let color = "bg-green-600";
  if (progress >= 80) color = "bg-red-600";
  else if (progress >= 50) color = "bg-yellow-600";

  console.log(`Progress: ${progress}%`);

  return (
    <div className="relative group w-full">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${color}`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>

      {/* Tooltip */}
      <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
        {Math.floor(progress)}%
      </span>
    </div>
  );
}
