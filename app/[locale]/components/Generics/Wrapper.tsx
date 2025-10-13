import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Wrapper = ({
  children,
  className,
}: Readonly<PropsWithChildren<Props>>) => {
  return <div className={clsx("px-4 lg:px-32", className)}>{children}</div>;
};

export default Wrapper;
