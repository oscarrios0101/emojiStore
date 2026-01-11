const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center rounded font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer";

  const variants = {
    primary:
      "w-full border border-sky-400 py-2 text-sky-400 hover:bg-slate-700",
    icon: "h-8 w-8 border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-600",
    danger: "p-2 text-slate-100 hover:bg-slate-800 hover:text-red-400",
    success:
      "border border-green-500 py-2 text-green-500 hover:bg-green-500 hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
