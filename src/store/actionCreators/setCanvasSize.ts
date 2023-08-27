import { SET_CANVAS_SIZE } from '../actionTypes';


export const setCanvasSize = (size: CanvasSize) => {
    return {
        type: SET_CANVAS_SIZE,
        payload: size
    }
}