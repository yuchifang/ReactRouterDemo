import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Index from './Pages'
import Video from './Pages/Video'
import "./App.css"
import Workplace from "./Pages/Workplace"
import { link } from 'fs'
interface AppProps {

}

const App: React.FC<AppProps> = ({ }) => {


    return (
        <BrowserRouter>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>導覽</h3>
                    <ul>

                        <li>
                            <Link to={{
                                pathname: "/",
                                state: {
                                    form: "home"
                                }
                            }}>
                                首頁
                            </Link>
                        </li>
                        <li>
                            <Link to="/video">
                                教學影片
                            </Link>
                        </li>
                        <li>
                            <Link to="/workplace">
                                技能樹
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="rightMain">

                    <Route
                        component={Index}
                        exact
                        path="/" />
                    <Route
                        component={Video}
                        path="/video" />

                    <Route
                        component={Workplace}
                        path="/workplace" />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App