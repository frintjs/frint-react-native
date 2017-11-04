# frint-react-native [![npm](https://img.shields.io/npm/v/frint-react-native.svg)](https://www.npmjs.com/package/frint-react-native) [![Build Status](https://img.shields.io/travis/frintjs/frint-react-native/master.svg)](https://travis-ci.org/frintjs/frint-react-native) [![License](https://img.shields.io/github/license/frintjs/frint-react-native.svg)](https://github.com/frintjs/frint-react-native/blob/master/LICENSE)

[![Greenkeeper badge](https://badges.greenkeeper.io/frintjs/frint-react-native.svg)](https://greenkeeper.io/)

> React Native integration for FrintJS.

## Install

You should already have these [FrintJS](https://frint.js.org) dependencies first:

```
$ npm install --save frint frint-react
```

Now you can install the package for [React Native](https://facebook.github.io/react-native/) integration:

```
$ npm install --save frint-react-native
```

## Usage

You can write a regular FrintJS application with React first:

```js
// App.js
import { createApp } from 'frint';
import React from 'react';
import { View, Text } from 'react-native';

function Root() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

const App = createApp({
  name: 'MyReactNativeProject',
  providers: [
    {
      name: 'component',
      useValue: Root,
    },
  ],
});

export default App;
```

Now instantiate and register it to React Native:

```js
// index.js
import { register } from 'frint-react-native';

import App from './App';

const app = new App();
register(app);
```

## License

MIT
