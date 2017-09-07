import React, { Component } from "react";
import ReactDOM from "react-dom";
import invariant from "invariant";
import hoistStatics from "hoist-non-react-statics";

import { contextMenuContextShape } from "./ContextMenuProvider";

function makeComponentWrapper(
    buildMenu,
    {
        // Options object
        stopGathering = false,
        reverseOrder
    } = {}
) {
    return WrappedComponent => {
        const displayName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            "Component";

        class ContextMenuConnect extends Component {
            static contextTypes = {
                contextMenuContext: contextMenuContextShape
            };

            static displayName = `ContextMenuConnect(${displayName})`;

            static WrappedComponent = WrappedComponent;

            componentDidMount() {
                this.nearestNode = ReactDOM.findDOMNode(this.innerNode);
                invariant(
                    this.nearestNode,
                    "Could not find a DOM node to attach contextMenu to"
                );
                this.nearestNode.addEventListener(
                    "contextmenu",
                    this.onContextMenu
                );
            }

            componentWillUpdate() {
                this.componentWillUnmount();
            }

            componentDidUpdate() {
                this.componentDidMount();
            }

            componentWillUnmount() {
                if (this.nearestNode) {
                    this.nearestNode.removeEventListener(
                        "contextmenu",
                        this.onContextMenu
                    );
                }
            }

            onContextMenu = () => {
                // Default will be prevented by the ContextMenuProvider, after the event bubbles.
                // Other nodes have the opportunity to capture. All we need to do here is
                // build the menu.
                this.appendContextMenu();
            };

            appendContextMenu() {
                const context = this.context.contextMenuContext;
                if (context.shouldGather()) {
                    const localItems = buildMenu(this.props);
                    context.addMenuItems(localItems);
                    if (stopGathering) {
                        context.stopGathering();
                    }
                    if (typeof reverseOrder !== "undefined") {
                        context.reverseOrder(reverseOrder);
                    }
                }
            }

            render() {
                return (
                    <WrappedComponent
                        ref={el => {
                            this.innerNode = el;
                        }}
                        {...this.props}
                    />
                );
            }
        }

        return hoistStatics(ContextMenuConnect, WrappedComponent);
    };
}

export default makeComponentWrapper;
