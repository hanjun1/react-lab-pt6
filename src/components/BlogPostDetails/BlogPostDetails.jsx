import React from 'react';

function BlogPostDetails(props) {
    return (
        <div>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}

export default BlogPostDetails;