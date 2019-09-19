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
  const { screenSize } = useScreenSize();
  return (
    <Page>
      {do {
        if (screenSize.large) {
          <Header />
        }
      }}
      {do {
        if (screenSize.small) {
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

### Order of conditions
As with CSS `@media` queries, you have to check the screen size in the same order, i.e. from largest to smallest, otherwise the first one will always apply. This is because a `small` screen still falls within a `large` one, but not vice versa.

## Api

The hook returns one property `screenSize` which itself contains the following properties:
- `isXs`: Always true, essentially because any screen will always match the extra small query
- `isOnlyXs`: Only true for screens smaller than the defined value
- `isS`: Any screen smaller than the defined `small` value
- `isOnlyXs`: Only true if the screen size is larger than `Xs` but smaller than `S`

... and so on until `Huge`:
```
const { screenSize } = useScreenSize();
const {
  isXs,
  isOnlyXs,
  isS,
  isOnlyS,
  isM,
  isOnlyM,
  isL,
  isOnlyL,
  isXl,
  isOnlyXl,
  isHuge,
  isOnlyHuge,
} = screenSize;
```

There's also another utility function called `getScreenSize` that returns exactly the contents of the value returned by the hook (properties of `screenSize`) (it's actually used internally in the hook) but that won't update the value based on the resize events.

Example:

```js
import { getScreenSize } from '@drawbotics/use-screen-size';

console.log(getScreenSize());

// prints
// {
//   isXs,
//   isOnlyXs,
//   isS,
//   isOnlyS,
//   isM,
//   isOnlyM,
//   isL,
//   isOnlyL,
//   isXl,
//   isOnlyXl,
//   isHuge,
//   isOnlyHuge,
// }
```