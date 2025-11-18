export const accessibleButton = `
<div onClick={handleClick}>
  Click me
</div>

<button 
  onClick={handleClick}
  // Accessible
  aria-label="Submit form"
  type="button"
>
  Click me
</button>

----------------------------------------

<input type="text" placeholder="Enter name" />

// good accessibility
<label htmlFor="name">Name:</label>
<input 
  type="text" 
  id="name"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby="name-error"
/>
{hasError && <span id="name-error">Name is required</span>}
`;

export const accessibleLibraries = `
npm install @reach/router          # Accessible routing
npm install react-focus-lock       # Focus management
npm install react-aria             # Adobe's accessible components
npm install @radix-ui/react-*      # Accessible primitives
npm install @chakra-ui/react       # Accessible component library
npm install @mui/material          # Material-UI (mostly accessible)
`;
