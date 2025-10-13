import clsx from "clsx";
import { PropsWithChildren } from "react";

export type HeadingVariantType = "h1" | "h2" | "h3" | "h4";

interface Props {
  variant: HeadingVariantType;
  className?: string;
  styles?: string;
  bold?: boolean;
}
const Heading = ({
  variant,
  children,
  styles,
  className,
  bold = true,
}: Readonly<PropsWithChildren<Props>>) => {
  const baseStyle = `${styles} text-secondary-normal ${
    bold && "font-semibold"
  }`;

  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `${baseStyle} text-[2rem]/[2.5rem] lg:text-[3.5rem]/[4.35rem]`,
            className
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={clsx(
            `${baseStyle} text-[1.5rem]/[2.25rem] lg:text-[2.5rem]/[3rem]`,
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={clsx(
            `${baseStyle} text-[1.25rem]/[2rem] lg:text-[1.5rem]/[2.25rem]`,
            className
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={clsx(`${baseStyle} text-[1.25rem]/[2rem]`, className)}>
          {children}
        </h4>
      );
  }
  return <h1></h1>;
};

export default Heading;
