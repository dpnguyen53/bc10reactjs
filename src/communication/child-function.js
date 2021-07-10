import React from "react";

export default function ChildFunction(props) {
    return (
        <div>
            <h3>ChildFunction</h3>
            <p>
                Username: {props.username} - Age: {props.age}
            </p>
        </div>
    );
}
