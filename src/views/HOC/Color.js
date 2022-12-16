import React from "react";

let getColorRandom = () => {
    let letter = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }

    return color;
}

const Color = (WrappedComponent) => {
    let colorRandom = getColorRandom();
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent
                {...props}
            />
        </div>
    )
}

export default Color;