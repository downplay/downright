import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";

@contextMenu(() => ["Inner menu 2", "Prepended to outer menu"])
export default class InnerMenuReverseGather extends Component {
    render = () => <PaddedBox yellow>Nested, blocking</PaddedBox>;
}
