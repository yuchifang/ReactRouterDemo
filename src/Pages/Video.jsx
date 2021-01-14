import React from 'react'
import { Route, Link } from "react-router-dom"
import ReactPage from "./video/ReactPage"
import Flutter from "./video/Flutter"
import Vue from "./video/Vue"

export default function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage/">React</Link></li>
                    <li><Link to="/video/flutter/">Flutter</Link></li>
                    <li><Link to="/video/vue/">Vue</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>教學影片</h3></div>
                <Route path="/video/reactpage/" exact component={ReactPage} />
                <Route path="/video/flutter/" exact component={Flutter} />
                <Route path="/video/vue/" exact component={Vue} />
            </div>
        </div>
    )
}
