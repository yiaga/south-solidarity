
import React from 'react';
import ObjectiveCard from './ObjectiveCard';
import Wrapper from '../Generics/Wrapper';
import HeadingBorderBottom from '../Headers/HeadingBorderBottom';
import ContentSpacing from '../Spacing/ContentSpacing';
import AnimatedComponent from '../AnimatedComponent';

const KeyObjectives = () => {
  const objectivesData = [
    {
      number: '01',
      title: 'Take Stock',
      description: 'Analyze lessons from recent protests and movements to identify what works, what fails, and why some endure while others falter.',
    },
    {
      number: '02',
      title: 'Innovate Together',
      description: 'Critically examine how social media, AI, and digital tools advance social justice while addressing surveillance, co-optation, and repression risks.',
    },
    {
      number: '03',
      title: 'Heal and Sustain',
      description: 'Address movement trauma, burnout, and emotional costs while developing frameworks for care, strategy, and long-term resilience.',
    },
    {
      number: '04',
      title: 'Build Forward',
      description: 'Co-create tools for cross-border solidarity, civic architecture, and narrative power that extends beyond single protest moments.',
    },
    {
      number: '05',
      title: 'Strengthen Solidarity',
      description: 'Forge vibrant communities of practice reimagining leadership, policy, and democratic futures across the Global South',
    },
  ];

  return (
    <section className="bg-[#FFAC13] py-24 text-black">
      <Wrapper>
        <AnimatedComponent>
        <HeadingBorderBottom color='#2EA024'>
          <span className="text-black">Key Objectives</span>
        </HeadingBorderBottom>
        </AnimatedComponent>
        <ContentSpacing />
        <ContentSpacing />
      <ul className="flex overflow-x-auto gap-5 p-4 no-scrollbar">
        {objectivesData.map((objective) => (
          <AnimatedComponent>
          <ObjectiveCard
            key={objective.number}
            num={objective.number}
            title={objective.title}
            description={objective.description}
          />
          </AnimatedComponent>
        ))}
      </ul>
      </Wrapper>
    </section>
  );
};

export default KeyObjectives;