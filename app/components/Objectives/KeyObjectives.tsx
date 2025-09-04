
import React from 'react';
import ObjectiveCard from './ObjectiveCard';
import Wrapper from '../Generics/Wrapper';
import HeadingBorderBottom from '../Headers/HeadingBorderBottom';
import ContentSpacing from '../Spacing/ContentSpacing';

const KeyObjectives = () => {
  const objectivesData = [
    {
      number: '01',
      title: 'Solidarity & Social Movements',
      description: 'Explore how solidarity & social movements can reshape our collective struggles and future.',
    },
    {
      number: '02',
      title: 'Gender & Inclusion',
      description: 'Explore how gender & inclusion can reshape our collective struggles and future.',
    },
    {
      number: '03',
      title: 'Climate Justice',
      description: 'Explore how climate justice can reshape our collective struggles and future.',
    },
    {
      number: '04',
      title: 'Democracy & Governance',
      description: 'Explore how democracy & governance can reshape our collective struggles and future.',
    },
  ];

  return (
    <section className="bg-white py-24 text-black">
      <Wrapper>
        <HeadingBorderBottom>
          <span className="text-black">Key Objectives</span>
        </HeadingBorderBottom>
        <ContentSpacing />
        <ContentSpacing />
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {objectivesData.map((objective) => (
          <ObjectiveCard
            key={objective.number}
            num={objective.number}
            title={objective.title}
            description={objective.description}
          />
        ))}
      </ul>
      </Wrapper>
    </section>
  );
};

export default KeyObjectives;