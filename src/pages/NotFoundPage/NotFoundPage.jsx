import css from "./NotFoundPage.module.ccs"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Oops, something went wrong”</h1>
        <Link to='/'>To home page</Link>
        </div>
    )
}
export default NotFoundPage