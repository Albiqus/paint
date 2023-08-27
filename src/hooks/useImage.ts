import { RefObject, useEffect } from "react"
import { getPermissSize } from "../utils/getPermissSize"


export const useImage = (
    canvasRef: RefObject<HTMLCanvasElement>,
    imageSrc: string,
    canvasSize: CanvasSize,
    diffCoords: Coords | null,
    prevMarginCoords: Coords | null,
    setPrevMarginCoords: any) => {

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d')
        if (!context || !imageSrc) return

        const img = new Image()
        img.src = imageSrc

        img.onload = function () {
            const { width, height } = getPermissSize(img.width, img.height)
            
            let marginW = (canvasSize.width - width) * 0.5
            let marginH = (canvasSize.height - height) * 0.5

            if (diffCoords && prevMarginCoords) {
                marginW = (prevMarginCoords.x || marginW) - diffCoords.x
                marginH = (prevMarginCoords.y || marginW) - diffCoords.y
            }

            setPrevMarginCoords({ x: marginW, y: marginH })

            context.clearRect(0, 0, canvasSize.width, canvasSize.height);
            context.beginPath();
            context.drawImage(img, 0, 0, img.width, img.height, marginW, marginH, width, height)
        }

    }, [imageSrc, diffCoords])

}