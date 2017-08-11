import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";

@contextMenu(() => ["Inner menu 3", "Fully blocks outer menu"])
export default class InnerMenuBlockGather extends Component {
    render = () => <PaddedBox blue>Nested, appending</PaddedBox>;
}
