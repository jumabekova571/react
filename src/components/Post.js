import React from 'react';

const Post = ({
    imageUrl,
    title,
    subTitle,
    date,
    text,
    commentsCount,
}) => {
    return (
        <div>
            <div className="w3-card-4 w3-margin w3-white">
                <img src={imageUrl} alt="Nature" style={{width: '100%'}} />
                <div className="w3-container">
                    <h3><b>{title}</b></h3>
                    <h5>{subTitle}, <span className="w3-opacity">{date}</span></h5>
                </div>
                <div className="w3-container">
                    <p>{text}</p>
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">{commentsCount}</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Post;