import styled from "styled-components";


export const Div = styled.div`
position: absolute;
width: ${(props: DragArea) => props.size.width + 'px'};
height: ${(props: DragArea) => props.size.height + 'px'};
background-color: rgba(0, 0, 0, 0.3);
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`

export const P = styled.p`
color: white;
font-size: 50px;
`