import { useState } from "react"
import { useDispatch } from "react-redux"
import { setImageSrc } from "../store/actionCreators/setImageSrc"
import { setIsMovingMode } from "../store/actionCreators/setIsMovingMode"


export const useFile = () => {
    
    const [isDrag, setIsDrag] = useState(false)
    const dispatch = useDispatch()


    function onDragOver(e: React.DragEvent<HTMLCanvasElement>) {
        e.preventDefault()
        setIsDrag(true)
    }
    function onDragLeave(e: React.DragEvent<HTMLCanvasElement>) {
        e.preventDefault()
        setIsDrag(false)
    }

    function onFileDrop(e: React.DragEvent<HTMLCanvasElement>) {
        e.preventDefault()
        setIsDrag(false)

        const file = e.dataTransfer.files[0]

        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (data: ProgressEvent<FileReader>) => {
            dispatch(setImageSrc(data?.target?.result))
            dispatch(setIsMovingMode(true))
        }
    }

    return { isDrag, onDragOver, onDragLeave, onFileDrop }
}