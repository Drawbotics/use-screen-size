# Is Device Hook

This hook will use the breakpoints defined in `@drawbotics/drylus-style-vars` to identify the device the app is running in.

## Installation

```bash
$ npm install @drawbotics/use-is-device @drawbotics/drylus-style-vars
```

## Usage

```js
import { useIsDevice } from '@drawbotics/use-is-device';


const App = ({ children }) => {
  const { isPhonePortrait, isPhoneLandscape } = useIsDevice();
  return (
    <Page>
      {do {
        if (isPhonePortrait) {
          <Header />
        }
      }}
      {do {
        if (isPhoneLandscape) {
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

The hook returns four properties:

 - `isPhone`: The device is a phone in either landscape or portrait mode.
 - `isPhoneLandscape`: The device is a phone in landscape mode only.
 - `isPhonePortrait`: The device is a phone in portrait mode only.
 - `isDesktop`: The device is a desktop environment or has the size of a desktop environment.

There's also another utility function called `getDevice` that returns exactly the same value as the hook (it's actually used internally in the hook) but that won't update the value based on the resize events.

Example:

```js
import { getDevice } from '@drawbotics/use-is-device';

console.log(getDevice());

// prints
// { isPhone: true, isPhoneLandscape: true, isPhonePortrait: false, isDesktop: false };
```