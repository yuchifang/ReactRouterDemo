import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Title from "./Pages/Title"
import List from "./Pages/List"
import Home from "./Pages/Home"
interface AppProps {

}

const App: React.FC<AppProps> = ({ }) => {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Title} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </BrowserRouter>
    );
}

export default App