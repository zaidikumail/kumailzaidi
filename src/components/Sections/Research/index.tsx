import {FC, memo} from 'react';
import Image from 'next/image';
import {catalog, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResearchSection from './ResearchSection';
import {SkillGroup} from './Skills';
import ResearchItem from './ResearchItem';

const Research: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Research}>
      <div className="flex flex-col divide-y-2 divide-orange-400">
        <ResearchSection title="Photometric catalog in the UDS">
          {catalog.map((item, index) => (
            <ResearchItem item={item} key={`${item.title}-${index}`} />
          ))
          }
        </ResearchSection>
        <ResearchSection title="Galaxy-Halo Connection">
          {experience.map((item, index) => (
            <ResearchItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResearchSection>
      </div>
    </Section>
  );
});

Research.displayName = 'Research';
export default Research;
