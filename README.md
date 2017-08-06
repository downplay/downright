# Downright

Right-click context menu for React, done right.

## Latest version: 0.2.x

Almost complete rewrite, added reasonable default styles. Rewrite paves the way for making rendering fully customisable in 0.3.0. Submenus now working but could do with more love.

## Sample Code

Downright is designed with a minimal API to setup and use in your React app. It provides a HOC to wrap your component to make it emit a context menu. You have access to props The primary use case is that your menu will be dispatching Redux actions, which have been injected into props using Redux. (Downright can be used with )

```javascript
import { contextMenu } from 'downright';

@connect(null, props => ...)
@contextMenu(props => {
    const {t} = props;
    return [
        ['Context menu'],                                             // A label or heading
        ['Badger', ()=>props.onClickedBadger()],                      // Calling a handler in the parent
        ['Click me', ()=>props.reduxInjectedAction()],                // A button dispatching an action
        ['Fork me', 'https://https://github.com/downplay/downright']  // Renders a <Link/>
    ];
})
class MyComponent extends Component {
    render() {
        <div>Right-click me to open the menu!</div>
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

Downright follows the provider pattern used by libraries by React. This means you need to wrap the DownRightProvider component somewhere at the base of your app tree, usually around where you would put other providers e.g.:

```jsx
<ReduxProvider store={store}>
    <ContextMenuProvider>
        <App />
    </ContextMenuProvider>
</ReduxProvider>
```

Additional notes:

1. The ordering of any other providers you have shouldn't matter at all for DownRight, it just needs to be outside your main App node
2. Multiple providers can certainly co-exist as long as they aren't inside each other, but usually you only need a singleton
3. Currently this will cause an additional wrapping `<div/>` around your entire app. This should be addressed in a future version, possibly via one of the portal libraries.

Also: This is a very early release and I do not consider this production ready, especially as the menu looks horrible right now and has no styling support. This in particular is right at the top of my TODO list!

### Default Theme

Downright ships with default stylings. How you want to include them depends on your setup and webpack config, but it should be just:

```javascript
import 'downright/dist/theme.css';
```

The styles use collision-free naming. Currently there is no real way to customise styling, this will be addressed in future releases.

If there are issues with loading the styles, please submit a ticket, also see /examples/webpack.config.js for the loader config to see how this can be used alongside your own CSS modules.

### Menu Decorator

The mechanism provided to actually make an area right-clickable is a HOC (Higher Order Component) to wrap another React component. This component must conform to:

1) Rendering at least one DOM node, which click events will be attached to
2) Being a class, not a stateless function.

You must use a wrapped component to 

The HOC can be used as a class decorator, or just wrap programmatically. Its setup is a single callback, which will be invoked when the user triggers a context menu. (And an optional object, which is not implemented yet.)

```javascript
import { contextMenu } from 'downright';

@contextMenu((props) => (
  [
    {...menuItem1},
    {...menuItem2},
  ]
), options)
```

#### ownProps

These are the props as passed through from the parent component. If using Redux, you'll want to `@connect()` *before* `@contextMenu()`, so you receive the props injected by Redux.

Can be used both to create your menu from store data (and outside params), as well as dispatching actions in callbacks.

DownRight is designed for the simplest cast to work nicely with Redux, but it's completely optional, the menu is generic enough to use alongside any React setup.

#### return value

Your configuration callback must return an array of menu items (or null or undefined if no menu needs opening).

Menu items themselves can be defined in three forms:

 - A vanilla string, this will produce a menu label
 - An array of two elements, the first is a string label, the 2nd is either a link destination or callback onClick function
 - A plain JavaScript object with the following properties:

`type: string`
 
 One of: label, button, link, submenu, separator.

`content: string|node`

Content will be rendered inside the menu. Can be a plain string, or a React node. Does not apply for separator.

`onClick: function`

A handler to be called when the button is clicked. Will be passed the Synthetic Event object provided by React when the button is clicked.

`to: string`

URL to navigate to when clicking on the link. The Link component from `react-router-dom` will be used.

`menu: array|function`

Menu to be rendered when the submenu is open. If a function is provided the menu will be rendered on-demand. The function will receive the same parameters as the configuration callback.

#### options

Note: Currently (0.2.0) the options object has no effect. 0.3.0 will bring configuration and style customisation.

Configures this instance of a context menu. Pass in a plain object with any of these properties:

`stopGathering: bool (default: false)`

If true, this will prevent any further menus being collected from higher-up components as the event bubbles up the component hierarchy.

The provider option `gatherMenus` effectively acts as a global switch for this. If `gatherMenus={false}` then menus will never be gathered past the first connected component, and the `stopGathering` setting is ignored.

### Nested Menu Components

It's entirely possible to create nested components that each have the contextMenu wrapper. In this case, as the click event bubbles up through the DOM tree, the Provider will gather all of the menus emitted by each component on the way, and produce a composite menu by concatenating each menu (with a separator in between).

If this is not desirable, the behaviour can be altered by setting `gatherMenus={false}` on the ContextMenuProvider. When this is the case, only the *closest* menu to the mouse click will be utilised. 

## Examples

Examples are found in https://github.com/downplay/downright/tree/master/examples. To run them, clone the repository and execute:

```
npm run dev
```

or

```
yarn dev
```

Then navigate to `http://127.0.0.1:3311/`

The dev server is hot module enabled so tweak at will.

## Version History

### 0.2.2

- Don't use style-loader for building package; use extract-text-webpack-plugin and provide an optional stylesheet that can be included by the developer. Added some guidance for this.

### 0.2.1

- Implement options to control gathering (bubbling) behaviour
- Fixed bundling of styles with source

### 0.2.0

Almost complete rewrite, and reasonable default styles. Rewrite paves the way for making rendering fully customisable in 0.3.0. Submenus now supported but could do with more love.

### 0.1.0

First release, basic prototype / proof of concept.

## Bugs and Issues

There are lots right now! I will address many very soon, particularly:

- Ensuring good cross-browser support (should be great, but needs testing)
- Bugginess with positioning on the screen
- Removing the outer <div> added by the provider
- Allowing the styles to be customised flexibly
- Additional entities - checkbox, etc.

Please report any other bugs or issues on GitHub: https://github.com/downplay/downright

## Copyright

&copy;2017 Downplay Ltd

Distributed under MIT license. See LICENSE for full details.
