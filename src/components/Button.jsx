// components/ui/Button.jsx
import { Icon } from "@iconify/react";
import clsx from "clsx";

export default function Button({
  children,
  icon,
  type = "button",
  variant = "primary",
  isPending = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const baseStyle =
    "flex cursor-pointer items-center justify-center gap-2 font-semibold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out";
  const variants = {
    primary: "bg-black text-white hover:rounded-none hover:bg-gray-900",
    outline:
      "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
    ghost: "text-gray-600 hover:text-black hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isPending || disabled}
      className={clsx(baseStyle, variants[variant], className, {
        "opacity-60 cursor-not-allowed": isPending || disabled,
      })}
    >
      {icon && <Icon icon={icon} className="text-lg" />}
      {isPending ? "Loading..." : children}
    </button>
  );
}
