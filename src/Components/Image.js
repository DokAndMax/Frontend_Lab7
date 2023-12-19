import {useState, useRef} from "react";
import ImageControlButton from "./ImageControlButton";

function Image(props) {
    const ref = useRef();

    const [imageVisibility, setImageVisibility] = useState("visible");
    const [imageWidth, setImageWidth] = useState(null);

    function onLoad() {
        setImageWidth(ref.current.offsetWidth);
    }

    function handleImageReveal() {
        setImageVisibility("visible");
    }

    function handleImageZoomIn() {
        setImageWidth(imageWidth * 1.1);
    }

    function handleImageZoomOut() {
        setImageWidth(imageWidth * 0.9);
    }

    function handleImageHide() {
        setImageVisibility("hidden");
    }

    return (
        <div>
            <a href={props.url}>
                <img
                    ref={ref}
                    className={props.className}
                    src={props.src}
                    alt={props.alt}
                    onLoad={onLoad}
                    style={{
                        visibility: imageVisibility,
                        width: imageWidth,
                    }}/>
            </a>
            <div>
                <ImageControlButton description="Додати" onClick={handleImageReveal}/>
                <ImageControlButton description="Збільшити" onClick={handleImageZoomIn}/>
                <ImageControlButton description="Зменшити" onClick={handleImageZoomOut}/>
                <ImageControlButton description="Видалити" onClick={handleImageHide}/>
            </div>
        </div>
    );
}

export default Image;