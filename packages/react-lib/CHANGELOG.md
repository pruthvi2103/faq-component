# @faq-component/react

## 1.0.0

### Major Changes

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

## 0.0.3

### Patch Changes

- Updated dependencies
  - @faq-component/core@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies
  - @faq-component/core@1.0.0

## 1.0.0

### Major Changes

- Initializes the repo, adds 2 packages which are extremely basic just to test out stuff

### Patch Changes

- Updated dependencies
  - @faq-component/core@1.0.0
