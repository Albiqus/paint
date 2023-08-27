import { SET_IMAGE_SRC } from '../actionTypes';


export const setImageSrc = (src: any) => {
    return {
        type: SET_IMAGE_SRC,
        payload: src
    }
}