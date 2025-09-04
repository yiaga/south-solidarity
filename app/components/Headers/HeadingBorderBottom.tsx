import React, { PropsWithChildren } from "react";
import Heading, { HeadingVariantType } from "./Heading";
import BaseSpacing from "../Spacing/BaseSpacing";

interface Props {
  variant?: HeadingVariantType;
}

const HeadingBorderBottom = ({
  children,
  variant = "h1",
}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div className="w-max">
      <Heading variant={variant} bold={false} className="w-max">
        {children}
      </Heading>
      <BaseSpacing />
      <hr className="bg-primary border-0 mt-2 mb-6 w-[125px] h-[6px] block" />
    </div>
  );
};

export default HeadingBorderBottom;
