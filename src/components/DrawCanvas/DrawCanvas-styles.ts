import styled from "styled-components"


export const Div = styled.div`
z-index:${(props: DrawCanvasProps) => props.isMovingMode ?  1 : 2};
position: relative;
`

export const Canvas = styled.canvas`

`

