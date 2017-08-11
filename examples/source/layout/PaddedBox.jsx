import styled from "styled-components";

export default styled.div`
    width: 10rem;
    height: 10rem;
    padding: 5rem;
    background-color: ${props => {
        if (props.color) {
            return props.color;
        } else if (props.blue) {
            return "#99f";
        } else if (props.green) {
            return "#9f9";
        }
        return "#f99";
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
