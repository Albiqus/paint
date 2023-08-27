import { RefObject, useEffect } from "react"
import { clearCanvas } from "../store/actionCreators/clearCanvas"
import { useDispatch } from "react-redux"
import { setImageSrc } from "../store/actionCreators/setImageSrc"
import { setIsMovingMode } from "../store/actionCreators/setIsMovingMode"


export const useClear = (isClear: boolean, canvasRef: RefObject<HTMLCanvasElement>) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isClear) return

        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return
        context.clearRect(0, 0, canvas.width, canvas.height)

        dispatch(clearCanvas(false))
        dispatch(setImageSrc(null))
        dispatch(setIsMovingMode(false))
        
    }, [isClear])
}