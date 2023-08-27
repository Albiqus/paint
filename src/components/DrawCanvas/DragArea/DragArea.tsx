import { Div, P } from "./DragArea-styles"


export const DragArea = ({ size }: CanvasSizeProps) => {

    return (
        <Div size={size}>
            <P>перетащите изображение</P>
        </Div>
    )
}