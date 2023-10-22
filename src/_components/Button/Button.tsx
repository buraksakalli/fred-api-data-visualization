import { cn } from "@/_utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center bg-violet-500 justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-primary-white text-primary-white hover:bg-violet-500/80 h-11 px-8 rounded-md",
        props.className ?? ""
      )}
    >
      {props.children}
    </button>
  );
};
