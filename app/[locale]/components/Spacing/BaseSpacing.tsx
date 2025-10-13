import { PropsWithChildren } from "react";

const BaseSpacing = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className=" my-4">{children}</div>;
};

export default BaseSpacing;
