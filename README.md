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

## Other Example

- [AnyInspector on Antd From - CodeSandbox](https://codesandbox.io/s/anyinspector-on-antd-from-13qt0b?file=/index.js)
![](https://user-images.githubusercontent.com/5436704/184058579-3de594e3-27f7-4605-a9c8-d21c220422d3.png)

![](https://user-images.githubusercontent.com/5436704/184058593-255569ce-6a83-4aef-a05a-2e4164b1ec74.png)