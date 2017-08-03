# DownRight

Right-click context menu for React, done right.

## Sample Code

The general use case is that your menu will be dispatching Redux actions, which you have injected into props using Redux.

```
import { contextMenu } from 'downright';

@connect(null, props =>)
@contextMenu(props => {
    const {t} = props;
    return [
        {}
    ];
})
class MyComponent extends Component {
    render() {
        <div>Click anywhere in this div to open the context menu!</div>
    }
}
```

## Installation


```
yarn add downright
```

or

```
npm install downright
```

Depending on your flavour.

## Usage

DownRight follows the provider pattern used by libraries by React. This means you need to wrap the DownRightProvider component somewhere at the base of your app tree, usually around where you would put other providers e.g.:

```
<ReduxProvider store={store}>
    <DownRightProvider>
        <App />
    </DownRightProvider>
</ReduxProvider>
```

Additional notes:

1. The ordering of any other providers you have shouldn't matter at all for DownRight, it just needs to be outside your main App node
2. Multiple providers can certainly co-exist as long as they aren't inside each other, but usually you only need a singleton
3. Currently this will cause an additional wrapping `<div/>` around your entire app.

