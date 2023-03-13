const Video = ({description, channel, title, dateAdded, thumbnail}) => {
    return (

    <div className="video-container">
        <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
        </div>
        <div className="video-info">
            <h3>Título: {title}</h3>
            <p>Fecha: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>Descripción: {description}</p>
        </div>
    </div>
    )
}
export default Video
