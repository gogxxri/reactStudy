import './App.css';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item, i) => (
              <CoreConcept {...CORE_CONCEPTS[i]} key={i} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <menu>
            <TabButton>Content</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
