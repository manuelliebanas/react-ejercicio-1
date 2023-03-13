import Video from '../components/Video.jsx';
import {videos} from '../utils/videos.jsx';

const VideoContainer = () => {
    return (
        <>
            {videos.map((video) => (
                <Video
                    key={video.title}
                    title={video.title}
                    dateAdded={video.dateAdded}
                    channel={video.channel}
                    thumbnail={video.thumbnail}
                    description={video.description}
                />
            ))}
        </>
    )
}
export default VideoContainer
