import React from 'react'
import { RouteComponentProps, useRouteMatch } from 'react-router-dom';

// interface PostProps extends RouteComponentProps
//     <{ id: string }> {

// }

export const Post = ({ history }) => {
    let match = useRouteMatch("/post/:id");
    console.log(match);
    return (
        <h1 onClick={() => {
            history.push("/list/123")
        }}>post</h1>
    );
}