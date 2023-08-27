import { ChromePicker } from "react-color"
import { Brush, ClearButton, Div, Input, InputWrapper, Motion, P, Tools } from "./Settings-styles"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../store/store";
import { setColor } from "../../store/actionCreators/setColor";
import { clearCanvas } from "../../store/actionCreators/clearCanvas";
import { setLineThickness } from "../../store/actionCreators/setLineThickness";
import { setIsMovingMode } from "../../store/actionCreators/setIsMovingMode";
import { ChangeEvent } from "react";


export const Settings = () => {
    const dispatch = useDispatch()

    let { color, lineThickness, isMovingMode, imageSrc } = useSelector((state: RootState) => state.main);

    const onColorChange = (e: any) => {
        dispatch(setColor(e.rgb))
    };

    const onClearButtonClick = () => {
        dispatch(clearCanvas(true))
    }

    const onLineThicknessChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLineThickness(e.target.value))
    }

    const onBrushClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(setIsMovingMode(false))
    }

    const onMotionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(setIsMovingMode(true))
    }


    return (
        <Div>
            <ChromePicker color={color} onChange={onColorChange} />

            <InputWrapper>
                <P>толщина кисти &nbsp;&nbsp;&nbsp;{lineThickness}</P>
                <Input onChange={onLineThicknessChange} value={lineThickness} type="range" min='1' max='100' id='slider' />
            </InputWrapper>

            <Tools>
                <Brush onClick={onBrushClick} isBrush={!isMovingMode} />
                {imageSrc && <Motion onClick={onMotionClick} isMotion={isMovingMode} />}
            </Tools>

            <ClearButton onClick={onClearButtonClick}>очистить</ClearButton>
        </Div>
    )
}