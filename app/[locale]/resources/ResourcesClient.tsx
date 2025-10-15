"use client";

import React from 'react';
import PageBanner from "../components/Banners/PageBanner";
import ssmcCover from "@/public/assets/images/ssmc_cover.jpg"; 
import Wrapper from "../components/Generics/Wrapper";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import ResourcesCard from "./ResourceCard";
import HeadingBorderBottom from "../components/Headers/HeadingBorderBottom";
import AnimatedComponent from "../components/AnimatedComponent";

const resourcesData = [
  {
    imageSrc: ssmcCover,
    title: "SOUTH-SOUTH SOCIAL MOVEMENTS CONVERGENCE",
    description:
      "SOUTH-SOUTH SOCIAL MOVEMENTS CONVERGENCE is a major event taking place from October 30th to November 1st, 2025, with the theme 'Connected Struggles, Many Voices'. It aims to connect and amplify the lessons from a rising generation of youth-led movements across Africa, Asia, and Latin America.",
    buttonText: "Download Here",
    buttonLink: "/assets/documents/ssmc_presentation.pdf",
  },
];

export default function ResourcesClient() {
  return (
    <section>
      <PageBanner title="Our Resources" />
      <Wrapper>
        <SectionSpacing />
        <AnimatedComponent>
          <HeadingBorderBottom>
            <span className="text-black">Download Resources</span>
          </HeadingBorderBottom>
        </AnimatedComponent>
        <SectionSpacing />
        <div className="flex flex-col space-y-16">
          {resourcesData.map((resource, index) => (
            <AnimatedComponent key={index}>
              <ResourcesCard
                imageSrc={resource.imageSrc}
                title={resource.title}
                description={resource.description}
                buttonText={resource.buttonText}
                buttonLink={resource.buttonLink}
              />
            </AnimatedComponent>
          ))}
        </div>
        <SectionSpacing />
      </Wrapper>
    </section>
  );
}
