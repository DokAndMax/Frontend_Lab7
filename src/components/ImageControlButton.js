function ImageControlButton({ description, onClick }) {
    return (
        <button onClick={onClick} style={{margin: 6}}>{description}</button>
    );
}

export default ImageControlButton;