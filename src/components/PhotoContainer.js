import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import apiKey from "../config";

import Photo from "./Photo";

const PhotoContainer = () => {
    const [photos, setPhotos] = useState();
    const { topic } = useParams();

    const performSearch = (topic) => {
        return axios({
                url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`,
                method: "get",
                timeout: 8000
            })
            .then(res => {
                setPhotos(
                    res.data.photos.photo.map(photo => {
                        return <Photo
                            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                            key={photo.id}
                        />
                    })
                )
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        performSearch(topic);
        // console.log(photos);
    }, [topic])

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
                {/* Not found */}
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default PhotoContainer;