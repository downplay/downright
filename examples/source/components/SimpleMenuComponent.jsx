import React, { Component } from "react";
import { contextMenu } from "downright";
import styled from "styled-components";

const BigBox = styled.div`
    width: 300px;
    height: 400px;
    background-color: #f99;
    display: flex;
    align-items: center;
    justify-content: center;
`;

@contextMenu(props => (
    [
        ["Menu label"],
        ["Item #1", () => props.onClickItem(1)],
        ["Item #2", () => props.onClickItem(2)],
        ["Back to home", "/"],
        ["Close", () => { /* Noop - just close the menu */ }],
    ]
))
export default class SimpleMenuComponent extends Component {

    render = () => (
        <BigBox>
            <div>
                { this.props.item
                    ? "You chose item 1!"
                    : "Right-click anywhere here for a menu!" }
            </div>
        </BigBox>
    )

}
