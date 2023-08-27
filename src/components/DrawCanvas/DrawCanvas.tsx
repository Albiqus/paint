import { useDraw } from "../../hooks/useDraw"
import { RootState } from "../../store/store";
import { Canvas, Div } from "./DrawCanvas-styles"
import { useSelector } from 'react-redux'
import { rgbaToHex } from "../../utils/toHex";
import { DragArea } from "./DragArea/DragArea";
import { useClear } from "../../hooks/useClear";
import { useFile } from "../../hooks/useFile";


export const DrawCanvas = () => {

    const { color, canvasSize, isMovingMode, isClear, lineThickness } = useSelector((state: RootState) => state.main);

    const { canvasRef, onMouseDown } = useDraw(drawLine)
    const { isDrag, onDragOver, onDragLeave, onFileDrop } = useFile()
    useClear(isClear, canvasRef)


    function drawLine({ prevPoint, currentPoint, context }: Draw) {
        const { x: currX, y: currY } = currentPoint
        const lineColor = rgbaToHex(color)

        let startPoint = prevPoint ?? currentPoint
        context.beginPath()
        context.lineWidth = lineThickness
        context.strokeStyle = lineColor
        context.moveTo(startPoint.x, startPoint.y)
        context.lineTo(currX, currY)
        context.stroke()

        context.fillStyle = lineColor
        context.beginPath()
        context.arc(startPoint.x, startPoint.y, lineThickness, 0, 2 * Math.PI)
        context.fill()
    }

    return (
        <Div isMovingMode={isMovingMode}>
            {isDrag && <DragArea size={canvasSize} />}
            <Canvas
                width={canvasSize.width}
                height={canvasSize.height}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseDown}
                ref={canvasRef}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onFileDrop} />
        </Div>

    )
}