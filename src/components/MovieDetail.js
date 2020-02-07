import React, {useState} from "react";

const MovieDetail = ({history, location : { state }}) => {
    const [detail] = useState(state);
    console.log(state);
    if(!detail) history.goBack(-1);
    return (
        <div>
            <h4>{detail['year']}</h4>
            <h4>{detail['title']}</h4>
            <div style={{display:'inline'}}>
                {
                    detail['genres'].map((genre,idx) => (<p key={idx} style={{marginLeft:3}}>genre</p>))
                }
            </div>
            <h4>{detail['summary']}</h4>
        </div>
    )
};

export default MovieDetail