import React from "react";
import styled from "styled-components";


const Button = (props) => {

    //Border category
    const { Border, B_radius,   } = props;
    
    //Background category
    const { BG_color,   } = props;
    
    //font category
    const { font_color, font_size  } = props;
    
    //size, position category
    const { width,height, } = props;
    
    //event category
    const { _ref , _onClick, disabled, } = props;
    
    //text category
    const { text, children} = props;
    

    const {  } = props;





    const sytles = {
        Border,
        B_radius,

        BG_color,

        font_color,
        font_size,

        width,
        height,

    }
    
    
    return (
    <div>
        <Btn {...sytles} ref={_ref} onClick={()=>_onClick()} disabled={disabled}>{text}{children}</Btn>
    </div>
    );
}


Button.defaultProps ={

    height : "50px",
    width : "100px",
    

    text : null,
    _onClick : false,
    disabled : false,
    _ref:null,
};

const Btn = styled.button`

    border :            ${props => props.Border};
    border-radius :     ${props => props.B_radius};
    
    background-color :  ${props => props.BG_color};
    
    font-size :         ${props => props.font_size};
    color :             ${props => props.font_color};
    
    height :            ${props => props.height};
    width :             ${props => props.width};
`;


export default Button;