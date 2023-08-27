import { useSelector } from "react-redux";
import { Canvas, Div } from "./ImageCanvas-styles"
import { RootState } from "../../store/store";
import { useRef, useState } from "react";
import { getDiffCoords } from "../../utils/getDiffCoords";
import { useImage } from "../../hooks/useImage";
import { useClear } from "../../hooks/useClear";


export const ImageCanvas = () => {

    const { canvasSize, imageSrc, isMovingMode, isClear } = useSelector((state: RootState) => state.main);

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [prevMarginCoords, setPrevMarginCoords] = useState(null)
    const [currCoords, setCurrCoords] = useState<Coords | null>(null)
    const [diffCoords, setDiffCoords] = useState<Coords | null>(null)


    useImage(canvasRef, imageSrc, canvasSize, diffCoords, prevMarginCoords, setPrevMarginCoords)
    useClear(isClear, canvasRef)


    const onMouseDownClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setCurrCoords({ x: e.clientX, y: e.clientY })
    }

    const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        setCurrCoords(null)
    }

    const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!currCoords) return

        const nextCoords = { x: e.clientX, y: e.clientY }
        const diffCoords = getDiffCoords(currCoords, nextCoords)

        setDiffCoords(diffCoords)
        setCurrCoords(nextCoords)
    }


    return (
        <Div isMovingMode={isMovingMode}>
            <Canvas
                onMouseDown={onMouseDownClick}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height} />
        </Div>
    )
}