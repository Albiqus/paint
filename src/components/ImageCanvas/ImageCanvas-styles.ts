import styled from "styled-components";


export const Canvas = styled.canvas`

`

export const Div = styled.div`
position: absolute;
z-index:${(props: DrawCanvasProps) => props.isMovingMode ? 2 : 1};
pointer-events: 'none';
`
