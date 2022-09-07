---
"@faq-component/react": major
"react-faq-docs": minor
---

# @faq-component/react

A simple and straight forward FAQ component for your needs!

usage

```
npm i @faq-component/react
```

```
import { Faq } from "@faq-component/react";
```

also exposes the `Accordion`, `AccordionSummary`, `AccordionContent` component for ease.

### usage of FAQ component

supply it with a `data` array.

```jsx
import { Faq } from "@faq-component/react";
function App() {
  const data = [
    { title: "Hello", content: "World" },
    { title: "Hello", content: "World" },
  ];
  return <Faq data={data} />;
}
```
