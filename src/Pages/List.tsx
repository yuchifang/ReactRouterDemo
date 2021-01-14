import React from "react"
import { useParams } from "react-router-dom"
const List = () => {
    let { id }: { id: string } = useParams();
    console.log("props", id)
    return (
        <h2>List-page{id}</h2>
    )
}
export default List