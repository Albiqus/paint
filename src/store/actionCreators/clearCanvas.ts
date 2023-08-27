import { CLEAR_CANVAS } from './../actionTypes';


export const clearCanvas = (status: boolean) => {
    return {
        type: CLEAR_CANVAS,
        payload: status
    }
}