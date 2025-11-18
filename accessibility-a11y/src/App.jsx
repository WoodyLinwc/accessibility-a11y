import "./App.css";
import MyAccordion from "./components/MyAccordion";

function App() {
  return (
    <>
      <h1>Accessibility (a11y)</h1>
      <MyAccordion title="What is it?">
        <h2>Short Definition</h2>
        <p>
          Accessibility (a11y) is the practice of making web applications usable
          by everyone, including people with disabilities.
        </p>
        <h2>Simple Explanation</h2>
        <p>a11y = "a" + 11 letters + "y" (numeronym for accessibility)</p>
      </MyAccordion>
      <MyAccordion title="Why do we need it?">
        <h2>What Problem Does It Solve?</h2>
        <p>
          <a
            href="https://www.worldbank.org/en/topic/disability"
            target="_blank"
          >
            15% of the world's population
          </a>{" "}
          has some form of disability and there is legal compliance (ADA,
          Section 508, WCAG guidelines)
        </p>
        <ul>
          <li>
            Improves UX for ALL users (keyboard navigation, clear labels, better
            structure)
          </li>
          <li>SEO benefits (semantic HTML helps search engines)</li>
        </ul>
        <h2>What Happens Without It?</h2>
        <ul>
          <li>Screen readers can't navigate your app</li>
          <li>Keyboard users get trapped</li>
          <li>Poor user experience</li>
          <li>Lost customers and revenue</li>
        </ul>
      </MyAccordion>
      <MyAccordion title="How does it work?">
        <h2>Basic Architecture</h2>
        <img src="./assets/workflow.png" alt="workflow" />
      </MyAccordion>
      <MyAccordion title="Show examples"></MyAccordion>
      <MyAccordion title="Tools / Libraries / Services"></MyAccordion>
      <MyAccordion title="Comparison"></MyAccordion>
      <MyAccordion title="Developer Responsibilities"></MyAccordion>
      <MyAccordion title="Collaboration"></MyAccordion>
      <MyAccordion title="Summary"></MyAccordion>
    </>
  );
}

export default App;
