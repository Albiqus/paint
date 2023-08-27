
type Draw = {
    context: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}

type Point = { x: number, y: number }

type CanvasSize = {
    height: number
    width: number;
}

type Coords = {
    x: number
    y: number
}

type CanvasSizeProps = {
    size: CanvasSize
}

type DragArea = {
    size: any
}

type BrushProps = {
    isBrush: boolean
}

type MotionProps = {
    isMotion: boolean
}

type DrawCanvasProps = {
    isMovingMode: boolean
}

type ChromePickerColor = {
    hex: strung
    hsl:{ h: number, s: number, l: number, a: number }
    hsv: { h: number, s: number, v: number, a: number }
    oldHue: number
    rgb: { r: number, g: number, b: number, a: number }
    source: string
}

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
}