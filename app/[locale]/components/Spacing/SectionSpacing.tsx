import React, { PropsWithChildren } from "react";

const SectionSpacing = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className=" my-20">{children}</div>;
};

export default SectionSpacing;
