import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";

@contextMenu(() => ["Inner menu 1", "Appended to outer menu"])
export default class InnerMenu extends Component {
    render = () => <PaddedBox green>Nested, prepending</PaddedBox>;
}
