import { SET_IS_MONING_MODE } from "../actionTypes"


export const setIsMovingMode = (status: boolean) => {
    return {
        type: SET_IS_MONING_MODE,
        payload: status
    }
}   