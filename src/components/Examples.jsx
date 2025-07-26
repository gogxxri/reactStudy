import React, { useState } from 'react';
import Section from './Section';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Tabs from './Tabs';

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const tabList = [
    { name: 'Components', value: 'components' },
    { name: 'Jsx', value: 'jsx' },
    { name: 'Props', value: 'props' },
    { name: 'State', value: 'state' },
  ];

  const handleSelect = selectedButton => {
    setSelectedTopic(selectedButton);
  };
  // tab Content
  let tabContent = <p>Please Select Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="EXAMPLES" id="examples">
      <Tabs
        // ButtonsContainer="menu" // 커스텀 컴포넌트는 동적 값, 내장은 스트링
        buttons={tabList.map(item => (
          <TabButton key={item.value} isSelected={selectedTopic === item.value} onClick={() => handleSelect(item.value)}>
            {item.name}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
