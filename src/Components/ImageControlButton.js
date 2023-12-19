function ImageControlButton({ description, onClick }) {
    return (
        <button onClick={onClick}>{description}</button>
    );
}

export default ImageControlButton;