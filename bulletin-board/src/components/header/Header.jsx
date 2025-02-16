import { Link } from "react-router-dom"

export const Header = () => {
    return <>
        <header>
            <p>掲示板</p>
            <Link to="/threads/new" className="header-link">スレッドを立てる</Link>
        </header>
    </>
}