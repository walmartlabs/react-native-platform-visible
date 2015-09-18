React Native Platform Visible
=============================

A visibility switch based on Platform that enables code like this:

```
<PlatformVisible.iOS>
  <Text>See me on iOS</Text>
</PlatformVisible.iOS>
<PlatformVisible.Android>
  <Text>See me on Android</Text>
</PlatformVisible.Android>
```

## Installation

```
npm install react-native-platform-visible --save
```

## Usage

```
import PlatformVisible from 'react-native-platform-visible';
```

Or

```
var PlatformVisible = require('react-native-platform-visible');
```

And then either:

```
<PlatformVisible target="ios">
  <Text>Shown on iOS</Text>
</PlatformVisible>
```

Or the more friendly:

```
<PlatformVisible.iOS>
  <Text>See me on iOS</Text>
</PlatformVisible.iOS>
```
