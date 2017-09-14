import React from "react";
import styled from "styled-components";
import defaultTheme from "downright/themes/default";

// Import Link from react-router-dom so we can use it for links
import { Link } from "react-router-dom";

// Set up styled components for our item template
const Outer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(192, 192, 255, 0.5);
    align-items: center;
    &:hover > div {
        visibility: visible;
    }
`;

// Style a custom bullet
const Bullet = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    margin: 0 0 0 5px;
    background-color: black;
    visibility: hidden;
`;

const Wrapper = styled.div`padding: 5px;`;

// Two important things when you swap out an element: make sure you render
// the children (except for separator), and render any other props using the
// {...others} pattern as follows.
const Item = ({ children, ...others }) => (
    <Outer {...others}>
        <Bullet />
        <Wrapper>{children}</Wrapper>
    </Outer>
);

// Swap in the <Link> from react-router-dom for SPA navigation
const LinkTemplate = ({ children, href, ...others }) => (
    <Link to={href} {...others}>
        {children}
    </Link>
);

// Additional inline styles, use a slide transition
// TODO: Transitions are broken now transitions are applied on the <nav> rather
// than the <ul>. Either need an extra wrapping <div> to just do the positioning,
// or move the transitions back to the <ul> and remove ALL styles from <nav>.
// Preferring 2nd option right now, since if the developer wants an extra wrapper
// for styling they can always add one, and it saves having to push entered/exiting
// to two separate places.
const styles = {
    container: {
        boxShadow: "none",
        overflow: "hidden",
        transition: "none"
    },
    menu: {
        transition: "transform 0.2s linear",
        transform: "translate(0, 0) scale(1, 1)"
    },
    entered: {
        transform: "translate(-100%, 0) scale(0, 0)"
    },
    exiting: {
        transform: "translate(100%, 0) scale(0, 0)"
    }
};

// Put the whole theme back together
// Note: Being careful not to mutate the original theme here
// TODO: A mergeThemes utility to help with this?
const myTheme = {
    styles,
    // Swap out the 'item' block
    elements: { item: Item, link: LinkTemplate },
    // Remove the default transition classes completely:
    classNames: { ...defaultTheme.classNames, entered: "", exiting: "" }
};

export default myTheme;
