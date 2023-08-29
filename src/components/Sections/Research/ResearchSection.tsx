import {FC, memo, PropsWithChildren} from 'react';

import {aboutData, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const ResearchSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Research}>
      <div className="flex flex-col gap-y-8">
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="relative h-max">
            <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
      </div>
    </Section>
  );
});

ResearchSection.displayName = 'ResearchSection';
export default ResearchSection;
