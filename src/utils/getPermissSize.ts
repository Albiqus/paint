export const getPermissSize = (width: any, height: any) => {
    const maxHeight = 600

    if (maxHeight >= height) return { width, height }
    
    return { width: 600 * width / height, height: 600 }

}