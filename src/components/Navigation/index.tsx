import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Todos",
        path: "/",
    },
    {
        name: "Autos",
        path: "/autos",
    },
    {
        name: "Hogar",
        path: "/hogar",
    },
    {
        name: "Salud",
        path: "/salud",
    },
]

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            links.map((link) => (
                                <li className="nav-item" key={link.name}>
                                    <NavLink className="nav-link" style={({ isActive }) => ({
                                        fontWeight: isActive ? 'bold' : '600',

                                    })} to={link.path}>{link.name}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
