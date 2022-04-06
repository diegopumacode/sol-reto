import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import Alert from '../../components/Alert';
import { Card, CardBody, CardFooter } from '../../components/Card';
import { getAllServices, Service } from '../../api/services';
import DeleteService from './DeleteService';
import UpdateService from './UpdateService';

type Props = {
    type: string
}

const ListService = ({ type }: Props) => {

    const queryClient = useQueryClient()

    const { data, isError, isLoading, } = useQuery<Service[], Error>("services", async () => await getAllServices(type));

    useEffect(() => {
        queryClient.fetchQuery("services")
    }, [type])

    if (isError) {
        return <Alert variant='danger'>Hubo un error al procesar los datos</Alert>
    }
    return (
        <div className='row gap-3'>
            {isLoading ? <div>Cargando...</div> : <>{
                data?.map((service) => (
                    <Card
                        key={service.id}
                        className="col-md-3 col-sm-2 col-xs-1 mb-3">
                        <CardBody>
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                        </CardBody>
                        <CardFooter className='d-flex gap-2'>
                            <UpdateService service={service} />
                            <DeleteService id={service.id} />
                        </CardFooter>
                    </Card>

                ))
            }</>}

            {
                data?.length === 0 && <Alert variant='info'>No hay servicios registrados</Alert>
            }
        </div>
    )
}

export default ListService