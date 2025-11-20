import "./App.css";
import MyAccordion from "./components/MyAccordion";
import workFlowImage from "./assets/workflow.png";
import comparisonImage from "./assets/comparison.png";
import { accessibleButton, accessibleLibraries } from "./CodeExample";

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
            16% of the world's population
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
        <img src={workFlowImage} alt="workflow" />
      </MyAccordion>
      <MyAccordion title="Show examples">
        <pre>{accessibleButton}</pre>
      </MyAccordion>
      <MyAccordion title="Tools / Libraries / Services">
        <h2>Testing Tools</h2>
        <ul>
          <li>
            <strong>axe DevTools</strong> - Browser extension for accessibility
            audits
          </li>
          <li>
            <strong>WAVE</strong> - Web accessibility evaluation tool
          </li>
          <li>
            <strong>Lighthouse</strong> - Built into Chrome DevTools
          </li>
          <li>
            <strong>React DevTools</strong> - Inspect component accessibility
            tree
          </li>
          <li>
            <strong>NVDA / JAWS</strong> - Screen readers for testing (Windows)
          </li>
          <li>
            <strong>VoiceOver</strong> - Built-in macOS/iOS screen reader
          </li>
        </ul>
        <h2>React Libraries</h2>
        <pre>{accessibleLibraries}</pre>
        <h2>Services & Guidelines</h2>
        <ul>
          <li>
            <strong>WCAG 2.1</strong> (Level A, AA, AAA) - Web Content
            Accessibility Guidelines
          </li>
          <li>
            <strong>WAI-ARIA</strong> - Accessible Rich Internet Applications
            specification
          </li>
          <li>
            <strong>Section 508</strong> - US federal accessibility standard
          </li>
          <li>
            <strong>ADA</strong> - Americans with Disabilities Act
          </li>
        </ul>
      </MyAccordion>
      <MyAccordion title="Comparison">
        <img src={comparisonImage} alt="comparison" />
        <h2>Pros and Cons</h2>
        <h3>Manual Accessibility (DIY)</h3>
        <p>
          <strong>Pros:</strong> full control over implementation, smaller
          bundle size, no external dependencies
        </p>
        <p>
          <strong>Cons:</strong> time-consuming, easy to miss requirements, more
          testing needed
        </p>
        <h3>Using Accessible Libraries</h3>
        <p>
          <strong>Pros:</strong> pre-built accessible components, tested by
          community, faster development, regular updates
        </p>
        <p>
          <strong>Cons:</strong> larger bundle size, less flexibility, library
          dependencies
        </p>
      </MyAccordion>
      <MyAccordion title="Developer Responsibilities">
        <h2>As a Frontend React Developer</h2>
        <ol>
          <li>Semantic HTML</li>
          <li>Keyboard Navigation</li>
          <ul>
            <li>Ensure all interactive elements are keyboard accessible</li>
            <li>Tab order makes sense</li>
            <li>Focus indicators are visible</li>
            <li>No keyboard traps</li>
          </ul>
          <li>ARIA Attributes</li>
          <ul>
            <li>
              Use when semantic HTML isn't enough, don't overuse (semantic HTML
              is better)
            </li>
            <li>
              <em>aria-label</em> - Accessible name
            </li>
            <li>
              <em>aria-labelledby</em> - Reference to label
            </li>
            <li>
              <em>aria-describedby</em> - Additional description
            </li>
            <li>
              <em>aria-live</em> - Announce dynamic content
            </li>
            <li>
              <em>aria-expanded</em> - Toggle state
            </li>
            <li>
              <em>aria-hidden</em> - Hide from screen readers
            </li>
          </ul>
          <li>Focus Management</li>
          <li>Form Accessibility</li>
          <li>Color Contrast</li>
          <li>Alt Text for Images</li>
        </ol>
      </MyAccordion>
      <MyAccordion title="Collaboration">
        <h2>UX/UI Designers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Review designs for accessibility before development</li>
          <li>Check color contrast ratios</li>
          <li>Ensure focus indicators in design specs</li>
          <li>Plan keyboard navigation flows</li>
        </ul>
        <h2>QA / Testers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Include accessibility in acceptance criteria</li>
          <li>Test with keyboard only</li>
          <li>Test with screen readers</li>
          <li>Run automated accessibility tools</li>
          <li>Test with browser zoom at 200%</li>
        </ul>
        <h2>Backend Developers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>API returns semantic error messages</li>
          <li>Provide proper status codes</li>
          <li>Support keyboard navigation in data</li>
          <li>Return structured data for screen readers</li>
        </ul>
        <h2>Product Managers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Include accessibility in requirements</li>
          <li>Allocate time for accessibility testing</li>
          <li>Prioritize accessibility bugs</li>
          <li>Understand legal compliance needs</li>
        </ul>
      </MyAccordion>
      <MyAccordion title="Summary">
        <h2>What is Accessibility?</h2>
        <p>
          Making React applications usable by everyone, including people with
          disabilities through:
        </p>
        <p>
          Semantic HTML, ARIA attributes, Keyboard navigation, Focus management,
          Screen reader support
        </p>
        <h2>Why It Matters</h2>
        <p>
          15% of people have disabilities, Legal requirement (ADA, Section 508,
          WCAG), Better UX for everyone, SEO benefits
        </p>
        <h2>How It Works</h2>
        <ul>
          <li>Use semantic HTML elements (button, nav, header)</li>
          <li>Add ARIA when needed (aria-label, aria-expanded)</li>
          <li>Manage keyboard focus (useRef, tabIndex)</li>
          <li>Test with assistive technologies</li>
          <li>Use accessible component libraries (Radix, Reach UI)</li>
        </ul>
        <h2>When to Use It</h2>
        <p>
          <strong>Always.</strong> Accessibility should be:
        </p>
        <ul>
          <li>Built in from the start</li>
          <li>Part of your Definition of Done</li>
          <li>Tested in every sprint</li>
          <li>A team responsibility</li>
        </ul>
        <h2>Key Takeaways</h2>
        <ul>
          <li>
            <strong>Accessibility is not optional</strong> - it's a legal and
            moral requirement
          </li>
          <li>
            <strong>Start early</strong> - easier to build in than retrofit
          </li>
          <li>
            <strong>Use the right tools</strong> - semantic HTML + accessible
            libraries
          </li>
          <li>
            <strong>Test regularly</strong> - keyboard, screen readers,
            automated tools
          </li>
          <li>
            <strong>Collaborate</strong> - work with design, QA, content,
            product
          </li>
          <li>
            <strong>Keep learning</strong> - accessibility standards evolve
          </li>
        </ul>
      </MyAccordion>
    </>
  );
}

export default App;
