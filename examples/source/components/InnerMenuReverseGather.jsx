import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";
import Heading from "../styles/Heading";

@contextMenu(
    () => [<Heading>Inner menu 2</Heading>, "Prepended to outer menu"],
    {
        reverseOrder: true
    }
)
export default class InnerMenuReverseGather extends Component {
    render = () => <PaddedBox yellow>Nested, appending</PaddedBox>;
}
