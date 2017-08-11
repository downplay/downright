import React, { Component } from "react";
import ReactDOM from "react-dom";
import invariant from "invariant";
import PropTypes from "prop-types";
import hoistStatics from "hoist-non-react-statics";

function makeComponentWrapper(
    buildMenu,
    {
        // Options object
        stopGathering = false,
        reverseOrder
    } = {}
) {
    return WrappedComponent => {
        const getDisplayName = name => `ContextMenuConnect(${name})`;
        const displayName = getDisplayName(WrappedComponent.displayName);

        class ContextMenuConnect extends Component {
            static contextTypes = {
                contextMenuContext: PropTypes.shape({
                    addMenuItems: PropTypes.func,
                    shouldGather: PropTypes.func,
                    stopGathering: PropTypes.func,
                    reverseOrder: PropTypes.func
                })
            };

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

        ContextMenuConnect.WrappedComponent = WrappedComponent;
        ContextMenuConnect.displayName = displayName;
        return hoistStatics(ContextMenuConnect, WrappedComponent);
    };
}

export default makeComponentWrapper;
