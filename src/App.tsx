import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Title from "./Pages/Title"
import List from "./Pages/List"
interface AppProps {

}

const App: React.FC<AppProps> = ({ }) => {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            <Route path="/" exact component={Title} />
            <Route path="/list/" component={List} />
        </BrowserRouter>
    );
}

export default App