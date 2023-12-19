function Image(props) {
    return (
        <div>
            <a href={props.url}>
                <img className={props.className} src={props.src} alt={props.alt} />
            </a>
            <div className="image-control">
                <button className="reveal">Додати</button>
                <button className="zoom-in">Збільшити</button>
                <button className="zoom-out">Зменшити</button>
                <button className="hide">Видалити</button>
            </div>
        </div>
    );
}

export default Image;