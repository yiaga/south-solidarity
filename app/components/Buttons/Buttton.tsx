import clsx from "clsx";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type SizeType = "sm" | "md";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "border";
  size?: SizeType;
  className?: string;
}

const Buttton = ({
  children,
  className,
  variant = "primary",
  size = "md",
}: Readonly<PropsWithChildren<Props>>) => {
  const sizeStyles: { [key in SizeType]: string } = {
    sm: "px-[12px] py-[6px] rounded-[12px]",
    md: "px-[24px] py-[16px] rounded-[16px]",
  };

  const baseStyles = `${sizeStyles[size]} font-semibold`;

  const btnStyles = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    border: "border border-[#CAC4D0]",
  };

  return (
    <button className={clsx(`${baseStyles} ${btnStyles[variant]}`, className)}>
      {children}
    </button>
  );
};

export default Buttton;
