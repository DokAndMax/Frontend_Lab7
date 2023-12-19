function Header(props) {
    return (
        <h2 id={props.id}>
            {props.name}
        </h2>
    );
}

export default Header;