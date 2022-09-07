# react-faq-docs

## 0.2.0

### Minor Changes

- d68d63d: # @faq-component/react

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

### Patch Changes

- Updated dependencies [d68d63d]
  - @faq-component/react@1.0.0

## 0.1.0

### Minor Changes

- Adds Docs, Initial Commit
