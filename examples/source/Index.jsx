import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.h1`
    font-size: 4rem;
    margin: 6rem;
`;

const Menu = styled.ul`
`;

const ListItem = styled.li`
    font-size: 2rem;
    margin: 1rem;
    text-align: center;
`;

const Item = ({ children, ...props }) =>
    <ListItem><Link {...props}>{children}</Link></ListItem>;

// TODO: Why am I rendering a menu by hand?

export default () => (
    <Page>
        <Header>Downright Fantastic Examples</Header>
        <Menu>
            <Item to="/simple">Simplest example</Item>
            <Item to="/submenus">Submenu examples</Item>
        </Menu>
    </Page>
);
