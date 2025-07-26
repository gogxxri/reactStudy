import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map(item => (
              <CoreConcept {...item} key={item.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <menu>
            {tabList.map(item => (
              <TabButton isSelected={selectedTopic === item.value} _onClick={() => handleSelect(item.value)}>
                {item.name}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
