import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";
import Heading from "../styles/Heading";

@contextMenu(() => [
    <Heading>Inner menu 1</Heading>,
    "Prepended to outer menu",
    "(Default)"
])
export default class InnerMenu extends Component {
    render = () => <PaddedBox green>Nested, prepending</PaddedBox>;
}
