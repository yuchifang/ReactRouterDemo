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

    let routerConfig = [
        { path: "/", title: "首頁", exact: true, component: Index },
        { path: "/video", title: "教學影片", exact: false, component: Video },
        { path: "/workplace", title: "技能樹", exact: false, component: Workplace }
    ]

    return (
        <BrowserRouter>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>導覽</h3>
                    <ul>
                        {routerConfig.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rightMain">
                    {routerConfig.map((item, index) => (
                        <Route
                            key={index}
                            component={item.component}
                            exact={item.exact}
                            path={item.path} />
                    ))}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App