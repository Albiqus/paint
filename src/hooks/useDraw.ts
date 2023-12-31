import { useEffect, useRef, useState } from 'react'


export const useDraw = (onDraw: ({ context, currentPoint, prevPoint }: Draw,) => void) => {

    const [mouseDown, setMouseDown] = useState(false)

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const prevPoint = useRef<null | Point>(null)

    const onMouseDown = () => setMouseDown(true)

    const onMouseUpHandler = () => {
        setMouseDown(false)
        prevPoint.current = null
    }

    useEffect(() => {

        const handler = (e: MouseEvent) => {
            if (!mouseDown) return
            const currentPoint = computePointInCanvas(e)

            const context = canvasRef.current?.getContext('2d')
            if (!context || !currentPoint) return

            onDraw({ context, currentPoint, prevPoint: prevPoint.current })
            prevPoint.current = currentPoint
        }

        const computePointInCanvas = (e: MouseEvent) => {
            const canvas = canvasRef.current
            if (!canvas) return

            const rect = canvas.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            return { x, y }
        }

        canvasRef.current?.addEventListener('mousemove', handler)
        window.addEventListener('mouseup', onMouseUpHandler)

        return () => {
            canvasRef.current?.removeEventListener('mousemove', handler)
            window.removeEventListener('mouseup', onMouseUpHandler)
        }
    }, [onDraw])

    return { canvasRef, onMouseDown }
}