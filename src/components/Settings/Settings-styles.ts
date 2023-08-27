import styled from "styled-components";
import brush from '../../images/brush.png';
import motion from '../../images/motion.png';


export const Div = styled.div`
z-index: 3;
position: absolute;
top: 50px;
left: 50px;
padding: 20px;
border-radius: 10px;
background-color: rgb(176, 176, 176);
`

export const ClearButton = styled.button`
margin-top: 30px;
width: 100%;
height: 30px;
font-size: 20px;
font-family: custom;
border: none;
outline: none;
border-radius: 20px;
&:hover{
    cursor: pointer;
    background-color: gray;
}
`

export const P = styled.p`
font-family: custom;
font-size: 25px;
font-weight: bold;
`

export const InputWrapper = styled.div`
margin-top: 10px;

`

export const Input = styled.input.attrs({ type: 'range' })`
margin-top: 20px;
-webkit-appearance: none;
height: 10px;
width: 100%;
background-color: black;
&:hover{
  cursor: pointer;
}
&::-webkit-slider-thumb {
background: black;
border: 5px solid white;
background-color: black;
cursor: pointer;
width: 15px;
height: 15px;
transform: scaleY(3);
-webkit-appearance: none;
}
`

export const Tools = styled.div`
margin: 0 auto;
margin-top: 20px;
width: 100%;
height: 80px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Brush = styled.div`
width: 64px;
height: 64px;
background-image: url(${brush});
border-radius: 5px;
outline: ${(props: BrushProps) => props.isBrush ? '3px solid black' : 'none'} ;

&:hover{
    cursor: pointer;
    outline: 3px solid black
}
`

export const Motion = styled.div`
width: 64px;
height: 64px;
background-image: url(${motion});
border-radius: 5px;
outline: ${(props: MotionProps) => props.isMotion ? '3px solid black' : 'none'} ;
&:hover{
    cursor: pointer;
    outline: 3px solid black
}
`