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

### Provider Setup

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

### Menu Decorator

The mechanism we provide to actually mark an area to be right-clickable is an HOC (Higher Order Component) to wrap another React component. This component must conform to:

1) Rendering at least one DOM node, which click events will be attached to
2) Being a class, not a stateless function.

You must use a wrapped component to 

The HOC can be used as a class decorator, or just wrap programmatically. Its configuration is a single callback,
which will be invoked when the user triggers a context menu.

```
import { contextMenu } from 'downright';

@contextMenu((props, state, menuContext, component) => (
  [
    {...menuItem1},
    {...menuItem2},
  ]
)
```

#### props

These are the props as passed through from the parent component. If using Redux, you'll want to `@connect()` *before* `@contextMenu()`, so you receive the props injected by Redux.

Can be used both to create your menu from store data (and outside params), as well as dispatching actions in callbacks.

DownRight is designed for the simplest cast to work nicely with Redux, but it's completely optional, the menu is generic enough to use alongside any React setup.

#### state

Local state is available as the 2nd parameter, also to help with menu creation.

#### menuContext

This context object is provided by the ContextMenuProvider. It exposes the following API:

##### menuContext.closeMenu()

If called, closes the currently open context menu.

#### return value

Your configuration callback must return an array of menu items (or null or undefined if no menu needs opening).

Menu items themselves can be defined in four forms:

 - A vanilla string, this will produce a menu label
 - An array of two elements, the first is a string label, the 2nd is either a link destination or callback onClick function

### Nested Menu Components

It's entirely possible to create nested components that each have the contextMenu wrapper. In this case, as the click event bubbles up through the DOM tree, the Provider will gather all of the menus emitted by each component on the way, and produce a composite menu by concatenating each menu (with a separator in between).

If this is not desirable, the behaviour can be altered by setting `gatherMenus={false}` on the ContextMenuProvider. When this is the case, only the *closest* menu to the mouse click will be utilised. This is demonstrated in this example: (TODO)
