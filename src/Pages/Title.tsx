import React, { useState } from "react"
import { Link, Redirect, useHistory } from "react-router-dom"

const Title = () => {
    const [list, setList] = useState([
        { id: "001", title: "111" },
        { id: "002", title: "222" },
        { id: "003", title: "333" }
    ])

    let history = useHistory()
    history.push("/home");
    console.log({ history });
    return (
        <>
            {/* <Redirect to="/list/home/" /> */}

            <h2>ReactRouter</h2>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>
                            <Link to={"/list/" + item.id}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Title