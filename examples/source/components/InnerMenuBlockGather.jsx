import React, { Component } from "react";
import { contextMenu } from "downright";
import PaddedBox from "../layout/PaddedBox";
import Heading from "../styles/Heading";

@contextMenu(
    () => [<Heading>Inner menu 3</Heading>, "Fully blocks outer menu"],
    {
        stopGathering: true
    }
)
export default class InnerMenuBlockGather extends Component {
    render = () => <PaddedBox blue>Nested, appending</PaddedBox>;
}
