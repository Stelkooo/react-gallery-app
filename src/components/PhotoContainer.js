import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({ defaultTopic, loading, photos, getPhotos }) => {
    const { topic } = useParams();
    let topicToFetch = topic ? topic : defaultTopic;
    topicToFetch = topicToFetch ? topicToFetch : "cats%2Cdogs%2Cbirds";

    useEffect(() => {
        getPhotos(topicToFetch);
    }, [topicToFetch]);

    photos = photos.map(photo => {
        return <Photo
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={photo.id}
        />
    })

    return (
        <div className="photo-container">
            {/* {loading ? <h2>Loading...</h2> : null}
            {photos.length !== 0 ? <h2>Results</h2> : null}
            <ul>
                {photos.length !== 0 ? photos : <NotFound topic={topicToFetch}/>}
            </ul> */}
            {loading ? <h2>Loading...</h2> : null}
            {photos.length !== 0 && !loading ? <h2>Results</h2> : null}
            <ul>
                {
                    (photos.length !== 0 && !loading)
                    ? photos
                    : (photos.length === 0 && !loading)
                    ? <NotFound topic={topicToFetch} />
                    : null}
            </ul>
        </div>
    );
}

export default PhotoContainer;