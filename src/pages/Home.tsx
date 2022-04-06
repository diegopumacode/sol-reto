import { useParams } from "react-router-dom"
import Navigation from "../components/Navigation"
import CreateService from "../features/services/CreateService"
import ListService from "../features/services/ListService"

const servicesTypes = ["", "autos", "hogar", "salud"]

export default function Home() {
    const { type } = useParams()
    return (
        <>
            <Navigation />
            {
                servicesTypes.includes(type || "")
                    ? <>
                        <div className="row mt-5">
                            <div className="col-md-9 col-sm-12 col-xs-12">
                                <ListService type={type || ""} />
                            </div>
                            <div className="col-md-3 col-sm-12 col-xs-12 ">
                                <CreateService type={type || ""} />
                            </div>
                        </div></> 
                    : <div className="container mt-5">
                        <h3>El tipo de servicio no existe</h3>
                        <span>
                            *Pruebe con los tipos de la barra de navegacion
                        </span>
                    </div>
            }

        </>
    )
}
