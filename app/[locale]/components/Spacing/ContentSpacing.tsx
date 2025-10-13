import { PropsWithChildren } from "react";

const ContentSpacing = ({ children }: Readonly<PropsWithChildren>) => {
  return <div className=" my-10">{children}</div>;
};

export default ContentSpacing;
