import { SET_LINE_THICKNESS } from '../actionTypes';


export const setLineThickness = (size: string) => {
    return {
        type: SET_LINE_THICKNESS,
        payload: size
    }
}