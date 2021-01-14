import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Title from "./Pages/Title"
import List from "./Pages/List"
import Home from "./Pages/Home"
import { Post } from "./Pages/Post"
interface AppProps {

}

const App: React.FC<AppProps> = ({ }) => {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/list/123">列表</Link></li>
                <li><Link to="/post/321">POST</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Title} />
                <Route path="/list/:id" component={List} />
                <Route path="/post/:id" exact component={Post} />
                <Route path="/" render={() => <h1>render</h1>} component={() => <h1>404</h1>} >sss</Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App