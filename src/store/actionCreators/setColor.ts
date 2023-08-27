import { SET_COLOR } from './../actionTypes';


export const setColor = (color: String) => {
    return {
        type: SET_COLOR,
        payload: color
    }
}