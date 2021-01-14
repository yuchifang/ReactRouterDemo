import React from 'react'
import { Route, Link } from "react-router-dom"
import Money from "./workplace/Money"
import Getup from "./workplace/Getup"

export default function Workplace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money/">Money</Link></li>
                    <li><Link to="/workplace/getup/">Getup</Link></li>

                </ul>
            </div>
            <div className="videoContent">
                <div><h3>教學影片</h3></div>
                <Route path="/workplace/money/" exact component={Money} />
                <Route path="/workplace/getup/" exact component={Getup} />

            </div>
        </div>
    )
}
