import React from 'react';
import { CORE_CONCEPTS } from '../data';
import Section from './Section';
import CoreConcept from './CoreConcept';

const CoreConcepts = () => {
  return (
    <Section title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(item => (
          <CoreConcept {...item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
