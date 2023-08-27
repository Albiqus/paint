export const  rgbaToHex = ({r, g, b, a}: any) => {
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    a = Math.round(a * 255).toString(16).padStart(2, '0');
    return '#' + (r + g + b + a).toUpperCase();
}