import React, { Component } from "react";
import { ContextMenuProvider } from "downright";
import InnerMenu from "../components/InnerMenu";
import InnerMenuReverseGather from "../components/InnerMenuReverseGather";
import InnerMenuBlockGather from "../components/InnerMenuBlockGather";
import OuterComponentWithMenu from "../components/OuterComponentWithMenu";
import FullWidthFullHeight from "../layout/FullWidthFullHeight";

export default class Simple extends Component {
    render = () =>
        <ContextMenuProvider>
            <FullWidthFullHeight>
                <OuterComponentWithMenu>
                    <InnerMenu />
                    <InnerMenuReverseGather />
                    <InnerMenuBlockGather />
                </OuterComponentWithMenu>
            </FullWidthFullHeight>
        </ContextMenuProvider>;
}
