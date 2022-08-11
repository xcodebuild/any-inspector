# any-inspector

Inspect any state with Redux DevTools.

## Usage

```tsx
import { AnyInspector } from 'any-inspector';

<AnyInspector name="your-state-name" target={your-state} />
```

## Example

```tsx
import { AnyInspector } from 'any-inspector';
const App = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      {/* This line for inspect your state */}
      <AnyInspector name="count" target={count} />
    </>
  );
};
```
