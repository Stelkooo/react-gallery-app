import React from "react";

const NotFound = ({ topic }) => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search for <strong>{topic}</strong> did not return any results. Please try again.</p>
        </li>
    )
}

export default NotFound;