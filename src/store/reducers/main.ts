import { CLEAR_CANVAS, SET_CANVAS_SIZE, SET_COLOR, SET_IMAGE_SRC, SET_IS_MONING_MODE, SET_LINE_THICKNESS } from "../actionTypes";


const startState = {
    color: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    lineThickness: 5,
    isClear: false,
    imageSrc: null,
    isMovingMode: false,
    canvasSize: {
        height: 0,
        width: 0
    },
}

export const main = (state = startState, action: any) => {
    switch (action.type) {
        case SET_COLOR: {
            return {
                ...state,
                color: action.payload
            }
        }
        case CLEAR_CANVAS: {
            return {
                ...state,
                isClear: action.payload
            }
        }
        case SET_IMAGE_SRC: {
            return {
                ...state,
                imageSrc: action.payload
            }
        }
        case SET_CANVAS_SIZE: {
            return {
                ...state,
                canvasSize: {
                    height: action.payload.height,
                    width: action.payload.width,
                }
            }
        }
        case SET_IS_MONING_MODE: {
            return {
                ...state,
                isMovingMode: action.payload
            }
        }  
        case SET_LINE_THICKNESS: {
            return {
                ...state,
                lineThickness: action.payload
            }
        }       
        default:
            return state;
    }
}