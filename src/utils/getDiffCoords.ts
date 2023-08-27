export const getDiffCoords = ({ x: prevX, y: prevY }: any, { x: nextX, y: nextY }: any,) => {
    return { x: prevX - nextX, y: prevY - nextY  }
}