import "./Brothers.css"
function Brothers({brothersName,game}) {
    return (
        <div className="brother-container">
            <h1>Hello {brothersName}</h1>
            <h2>Favs Game { game}</h2>
        </div>
    )
}
export default Brothers