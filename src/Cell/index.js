const Cell = (props) => {
    return (
        <div className="cell" style={{ backgroundImage: `radial-gradient(white 0%, ${props.background})` }}></div>
    );
}

export default Cell