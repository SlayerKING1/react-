import React from "react";

function Card(props){
    return (
        <div>
            <h2 className="text-2xl bg-slate-500 p-6 rounded-md">{props.username}</h2>
            <p className="text-3xl bg-red-700 rounded-sm">Some text inside the card</p>
        </div>
    )
}

export default Card;