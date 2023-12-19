import {useState} from "react";
import getRandomColor from "../scripts/getRandomColor";

function Header({name}) {
    const [colorsStyle, setColorsStyle] = useState(null);

    const onClickColorChange = () => {
        setColorsStyle({
                color: getRandomColor(),
                backgroundColor: getRandomColor(),
            });
    }


    return (
        <h2 style={colorsStyle}
            onClick={onClickColorChange}>
            {name}
        </h2>
    );
}

export default Header;