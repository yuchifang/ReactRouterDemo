import React from "react"
import { useParams, Link, RouteComponentProps } from "react-router-dom"
interface Props extends RouteComponentProps { }
const List: React.FC<Props> = ({ history, location, match }) => {
    let { id }: { id: string } = useParams();
    console.log("location", location);
    console.log("match", match);
    console.log({ history });
    return (
        <>
            <h2>List-page{id}</h2>
            <Link to="/"> go to Title</Link>
            <button
                onClick={() => {
                    history.push("/")
                }}>
                Click me to go to about page
            </button>
        </>
    )
}
export default List