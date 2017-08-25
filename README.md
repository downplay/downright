# Downright

A lightweight (~25k minified) right-click context menu HOC for React Web, with completely customisable theming and transitions.

<img src="docs/coverImage.png" width="359" title="What it looks like">

## Latest version: 0.5.1

### *BREAKING CHANGES* in 0.6.0:

* Package structure has changed. There is no more dist folder. Themes are imported from:

`js
import "downright/themes/default.css";             // CSS file with default (hashed) naming
import classNames from "downright/themes/default"; // Theme object for default theme
import "downright/themes/bem.css";                 // CSS file with BEM naming
import bemClassNames from "downright/themes/bem";  // Theme object for BEM theme
`

### About this version

0.5.x marks a move to largely stable releases possibly even usable in production!

Features:

* Convenient HOC with simple shorthand to create context-sensitive zone
* Granular theming; replace/extend any classNames and styles, and swap out any element with your own components to customise the HTML output
* Supports any type of menu item: label, button, link, separator, and any custom element
* CSS transitions and submenus - any depth, with optionally deferred building
* Light-weight - 25k for the core, plus 5k for the default theme (minified sizes) - for a well featured and extremely flexible menu component
* Low-dependency - depends only on standard React packages and very common third party libraries, plus a very tiny theming helper called "*[downstyle](https://github.com/downplay/downstyle)*"

See the end for roadmap / planned features.

## Sample Code

Downright is designed with a minimal API to setup and use in your React app. It provides a HOC to wrap your component to make it emit a context menu. You have access to props here, an obvious use case being that your menu may wish to receive store data and dispatch actions, which have been injected into props using Redux. (Downright works very nicely with Redux, but this is entirely optional and not a dependency!)

```javascript
import { contextMenu } from "downright";
import "downright/dist/theme.css";

@connect(null, props => {...})
@contextMenu(props => {
    return [
        "Context menu",                                  // A label or heading
        ["Badger", () => props.onChosen("badger")],      // Calling a handler in the parent
        ["Click me", () => props.reduxInjectedAction()], // A button dispatching an action
        ["Home", "/"]                                    // Renders a <Link/>
        ["Fork me on GitHub",
            "https://https://github.com/downplay/downright",
            target="_blank"]                             // Open a URL in a new window
    ];
})
class MyComponent extends Component {
    render() {
        <div>Right-click me to open a menu!</div>;
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

### ContextMenuProvider Setup

Downright follows the provider pattern used by libraries such as Redux. This means you need to wrap the ContextMenuProvider component somewhere around the base of your app tree, usually around where you would put other providers e.g.:

```jsx
import { ContextMenuProvider } from "downright";

<ContextMenuProvider>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
</ContextMenuProvider>
```

Additional notes:

1. The ordering of any other providers you have shouldn't matter at all for DownRight, it just needs to be outside your main App node
2. Multiple providers can certainly co-exist as long as they aren't inside each other, but usually you only need a singleton
3. Currently this will cause an additional wrapping `<div/>` around your entire app. A future version of the package will include the ability to target a layer manually, removing this. Additionally the div should be unneccessary in React v16.

#### properties

These properties affect all context menus under this provider.

`theme: object (default: see "default theme")`

An optional object describing the classNames, styles and elements used to render each type of element in the menu. See sections on "Default Theme" and "Advanced Theming" for information on how to use this property.

`className: string (default: null)`

If provided, this className will be appended to all menu elements. This can be used for transient and individual menu variations beyond the built-in theming support.

`gatherMenus: bool (default: true)`

This affects the behaviour when context connected components are nested inside each other. By default, all context menus will contribute items towards the generated menu. If this is set to false, then only the immediate container clicked on will render its menus.

`reverseOrder: bool (default: false)`

Will reverse the order in which menus are gathered. So instead of the innermost menu items being at top of the menu, *above* menus generated further up in the tree, they will be appended instead.

`menuSeparator: string|node|object (default: "-")`

The item to use as a separator to "glue" together different menus gathered during a context menu event. If only one menu is triggered then no separator will be used. The separator follows the same shorthand for menuItems added in the buildMenu callback (described below). The default `"-"` ultimately generates a single vanilla `<hr>` tag.

`enableTransitions: bool (default: true)`

Whether to enable CSS transition animations for menus (and submenus) entering and leaving the page. When true, the following will happen:

1. A menu that has just appeared will have an `entered` style applied, and this will be immediately removed after first render

2. A menu that is about to be removed will have an `exiting` style applied. The menu component will wait for an onTransitionEnd event before finally removing itself from DOM.

Both `entered` and `exiting` styles can be customised as described in the section on Theming.

`alwaysPreventNativeContextMenu: bool (default: false)`

If true, then the native (browser) context menu will *always* be suppressed, even if the user invokes it on something that isn't wrapped in @contextMenu. Note: It can only be suppressed when the event originates within the ContextMenuProvider.

`submenuHoverDelay: number (default: 500) (in milliseconds)`

Time in milliseconds a submenu waits after mouse hover before it opens.

### Context Menu connector (HOC / decorator pattern)

The mechanism provided to actually make an area right-clickable is a HOC (Higher Order Component) to wrap another React component. This component must conform to:

1) Rendering at least one DOM node, which click events will be attached to
2) Being a class, not a stateless function.

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

Menu items themselves can be defined in various forms:

 - A vanilla string, this will produce a menu label; can also be any React element
 - The special string "-" will produce a separator instead
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

Menu to be rendered when the submenu is open. If a function is provided the menu will be rendered on-demand. This callback will receive the same parameters as the configuration callback. The callback can return an array of menu items in the same format as the configuration callback, or may optionally return a Promise, in which case the submenu will be not be opened until the Promise resolves. If something would cause the menu to close in the menu time (a different submenu opening, or the parent menu closing) then the submenu will never be opened.

#### options

Configures this instance of a context menu. Pass in a plain object with any of these properties:

`stopGathering: bool (default: false)`

If true, this will prevent any further menus being collected from higher-up components as the event bubbles up the component hierarchy.

The provider option `gatherMenus` effectively acts as a global switch for this. If `gatherMenus={false}` then menus will never be gathered past the first connected component, and the `stopGathering` setting is ignored.

### Default Theme

Downright ships with default stylings. How you want to include them depends on your setup and webpack config, but should just be able to do this (once) anywhere in your app. This assumes you are using `style-loader` and/or `extract-text-webpack-plugin` (but not `css-modules`) on 3rd-party modules:

```javascript
import "downright/themes/default.css";
```

The styles use collision-free naming. There is an alternative build of Downwrite that uses BEM-style naming classes instead,which you may wish to use if you want to override the styles elsewhere in your own CSS. To use this, you need to import a different CSS file, and provide a theme object to ContextMenuProvider so it know which classNames to use:

```jsx
import "downright/themes/bem.css";
import bemTheme from "downright/themes/bem";

<ContextMenuProvider theme={bemTheme}>
    {...}
</ContextMenuProvider>
```

There is also a "dark" theme available if you are so inclined:

```jsx
import "downright/themes/dark.css";
import bemTheme from "downright/themes/dark";

<ContextMenuProvider theme={darkTheme}>
    {...}
</ContextMenuProvider>
```

With any issues loading the styles, see the loader configuration in `/examples/webpack.config.js` to see how this can be used alongside your own CSS modules configuration.

To see what classes are available, you can see the default stylesheet in this file, except that every class must be appended with: `downwrite__contextmenu__`

Default styles are here:

https://github.com/downplay/downright/tree/master/source/styles/menu.css

You can see various examples of themes and styling here:

https://github.com/downplay/downright/tree/master/examples/source/examples/Styling.jsx
https://github.com/downplay/downright/tree/master/examples/source/examples/Styling.css

#### Advanced theming

The `theme` property of `ContextMenuProvider` exposes an API which allows you to customise any single aspect of the rendering of a Downright menu. Theming uses the [Downstyle](https://github.com/downplay/downstyle) system allowing complete customisation of any element; this adds a very tiny dependency to the package, with tree-shaking this should be less than 3kb *un*-minified. (TODO: Some real stats on bundle sizes!) More documentation on how theming works can be found at [Downstyle](https://github.com/downplay/downstyle), but what follows is a reasonably complete guide to customising the themes.

A theme is a plain object with three optional properties: `classNames`, `styles`, and `elements`. These properties allow you to map different classNames, styles, and elements to different blocks of the rendering of the menu.

In this example we take the base BEM theme, apply some transition styles inline, and swap out the item element for one with completely customised rendering using `styled-components`: https://github.com/downplay/downright/tree/master/examples/source/styles/customMenuTheme.js

The available blocks and styles that can be overridden are:

Block name | Default element | Description
-----------|-------------|-----------------
container | `<nav>` | Root container for the menu. This element will be absolutely positioned.
menu | `<ul>` | Main menu element
item | `<li>` | Menu item element, wraps every child item (one of the following eleemnts)
button | `<button>` | Button item element
link | `<Link>` (from react-router-dom) | Link item element
label | `<div>` | Label item element
separator | `<hr>` | Separator item element
submenu | `<div>` | Submenu item element
selected | n/a | Currently highlighted menu item, by default the same as the :hover style
entered | n/a | Applied to menu when it first appears. Used for transitions.
exiting | n/a | Applied to menu before it leaves. Used for transitions. Menu will wait for transition to end before being removed from DOM.

### Nested Menu Components

It's entirely possible to create nested components that each have the contextMenu wrapper. In this case, as the click event bubbles up through the DOM tree, the Provider will gather all of the menus emitted by each component on the way, and produce a composite menu by concatenating each menu (with a separator in between).

If this is not desirable, the behaviour can be altered by setting `gatherMenus={false}` on the ContextMenuProvider. When this is the case, only the *closest* menu to the mouse click will be utilised. 

## Examples

Examples are found in https://github.com/downplay/downright/tree/master/examples. To run them, clone the repository and execute:

```
npm run build
npm run examples
```

or

```
yarn build
yarn examples
```

Then navigate to `http://127.0.0.1:3311/`

The dev server is hot module enabled so tweak at will.

## Version History

### 0.6.0

#### Improvments and fixes

- Apply transitions on the menu rather than wrapper (`<nav>` vs outer `<div>`) and fix examples
- Included a new "dark" theme

#### Breaking changes

- Reworked build to get rid of /dist in package and remove some redundant files, see intro

### 0.5.1

- Can now return a Promise from submenu builder callbacks to load menus asynchronously. Added an example for this on the Submenus example page.
- Fixed buggy enter/leave timer on submenu due to timeout not being stored
- Fixed clicking on already open/opening menu would close it and reopen it

### 0.5.0

#### More bugfixes!

- Fix opening one submenu when a different submenu is open, by deduping keys
- Moved handling of `entered`/`exiting` to the right level and make all exiting transitions work properly
- Fixed application of `selected` on opened submenus

#### New feature

- Submenus open on hover after short delay, configurable with `submenuHoverDelay` prop on ContextMenuProvider, defaults to 500ms

### 0.4.2

#### Bugfixes!

- Menu `<nav>` will now respond if theme changes
- Fixed that menu aggregation via bubbling wasn't working
- Reorder rendering order, context menu would sometimes render underneath other elements
- Also gave menus a z-index of 1000 to be sure (could review this, it's a completely arbitrary number, consider providing a dedicated prop for this specific style property)
- Added some padding to prevent submenu text overlapping the triangle icon
- Fixed that onClick handlers were triggering twice
- Allow native browser context menu to open if no @contextMenu wrapper gets hit
- Added an `alwaysPreventNativeContextMenu` option (default: `false`) to enable the previous behaviour

### 0.4.1

- Improved menu positioning. Will never go off top or bottom of the screen, and gets a vertical scrollbar if it's too tall to fit. Will also not go off the RHS. This can cause submenus to overlap with parent menus, so could still be improved further.
- Menu is now using fixed positioning, along with transform for layout
- Remove some spurious prop warnings (also new downstyle version)

### 0.4.0

- Submenu rewrite; they work now and look prety good

### 0.3.1

- Fixed several styling issues
- Theme helper externalised to `downstyle` package

### 0.3.0

- Brand new theming system, allows override of any class names, inline styles, and elements

### 0.2.5

- Fixed the menu appearing at the wrong page coordinates
- Added an example for nesting menu connectors
- Added option to modify nesting behaviour: reverseOrder (default: `false`)
- Added option to customise separator used during menu building: menuSeparator (default: `"-"`)
- Allow React elements to be used in menu build shorthands, e.g. `@contextMenu(()=>[<h2>Hi, menu!</h2>])`

### 0.2.4

- Added some support for enter/exit CSS transitions with entering/exiting classNames

### 0.2.3

- Added alternate build with BEM classnames to enable styling by global CSS
- Allow className to be passed into the ContextMenuProvider, this will be appended to *all* rendered elements

### 0.2.2

- Don't use style-loader for building package; use extract-text-webpack-plugin and provide an optional stylesheet that can be included by the developer. Added some guidance for this.

### 0.2.1

- Implement options to control gathering (bubbling) behaviour
- Fixed bundling of styles with source

### 0.2.0

Almost complete rewrite, and reasonable default styles. Rewrite paves the way for making rendering fully customisable in 0.3.0. Submenus now supported but could do with more love.

### 0.1.0

First release, basic prototype / proof of concept.

## Planned / Roadmap

* Provide a button component for opening menus with left-click
* Include the ability to generate nav bars / application-style menus as well
* Support keyboard, full accessibility
* Proper touch support
* Ship a couple of themes - e.g. dark, high-contrast
* Export the menu primitives for ad-hoc use
* Testing for cross-browser support
* Remove the outer `<div>` added by the provider

### Out of Scope

While the menu as-is approaches feature completeness, there are some features that would be really nice for certain use cases. However, I do not want the bundle size to get significantly
larger than it already is! Consequently, if any of these out-of-scope features are released, they will be as separate packages which can extend the core.

* Custom themeable scrollbars (currently just native)
* Paging / lazy instantiation of elements
* Additional item types (inputs, toggles...)
* A variety of transition extenders

## Bugs and Issues

Please report any other bugs or issues on GitHub: https://github.com/downplay/downright

## Copyright

&copy;2017 Downplay Ltd

Distributed under MIT license. See LICENSE for full details.
