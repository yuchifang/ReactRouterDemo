import React from 'react'
import { useLocation } from 'react-router-dom'
const Index = () => {
    let location = useLocation()
    console.log({ location });
    return (
        <h2>我是首頁</h2>
    )
}

export default Index