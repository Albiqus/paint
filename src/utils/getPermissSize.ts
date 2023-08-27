const MAX_HEIGHT = 600


export const getPermissSize = (width: any, height: any) => {
    if (MAX_HEIGHT >= height) return { width, height }
    
    return { width: MAX_HEIGHT * width / height, height: MAX_HEIGHT }

}