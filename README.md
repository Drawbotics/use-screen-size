# Get Screen Size Hook

This hook will use the breakpoints defined in `@drawbotics/drylus-style-vars` to identify screen size where the app is running.

## Installation

```bash
$ npm install @drawbotics/use-screen-size @drawbotics/drylus-style-vars
```

## Usage

```js
import { useScreenSize } from '@drawbotics/use-screen-size';


const App = ({ children }) => {
  const { screenSize, ScreenSizes } = useScreenSize();
  return (
    <Page>
      {do {
        if (screenSize >= ScreenSizes.M) {
          <Header />
        }
      }}
      {do {
        if (screenSize < ScreenSizes.S) {
          <Sidebar />
        }
      }}
      <Content>
        {children}
      </Content>
    </Page>
  )
};


export default App;
```

## Api

The hook returns two properties `screenSize` and `ScreenSizes`:
- `screenSize` is equivalent to the current size of the screen following the current media query matching the size
- `ScreenSizes` is a constant with the screen size value matching its size definition:
```
const ScreenSizes = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
};
```

This allows you to mimic the CSS way of writing queries, but in a more verbose way in JavaScript. You can use the comparative operators `<,=,>` to determine what should be rendered on the screen.

If you want to render something when the screen is smaller or equal to a small size:
```
  if (screenSize <= ScreenSizes.S) {
    // Content for small screens and lower
  }
  else {
    // Content for screens larger than small
  }
```

You can also target specific sizes with the `===` operator:
```
  if (screenSize === ScreenSizes.L) {
    // Only render this content when the screen is L (smaller than XL and larger than S)
  }
```

For anything larger than XL you should use the following condition:
```
  if (screnSize > ScreenSizes.XL) {
    // Content for big screens
  }
```

### Order of conditions
As with CSS `@media` queries, you have to check the screen size in the same order, i.e. from largest to smallest, otherwise the first one will always apply. This is because a small screen still falls within a large one, but not vice versa.

---

There's also another utility function called `getScreenSize` that returns exactly the contents of the value returned by the hook (properties of `screenSize`) (it's actually used internally in the hook) but that won't update the value based on the resize events.

Example:

```js
import { getScreenSize } from '@drawbotics/use-screen-size';

console.log(getScreenSize());

// on medium screen prints
3
```