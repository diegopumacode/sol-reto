import { useMutation, useQueryClient } from 'react-query'
import { Card } from '../../components/Card'
import ServicesForm from '../../components/Form/ServicesForm'
import { createService } from '../../api/services'
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    type: string
}

const CreateService = ({ type = "" }: Props) => {

    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(createService)

    const submitForm = async (values: any, reset: any) => {
        try {
            let response = await mutateAsync({ ...values, type: type })
            queryClient.invalidateQueries("services")
            if (response) {
                toast("Servicio creado con exito!", {
                    position: "top-right",
                    autoClose: 1000,
                    type: "success"
                });
                reset()
            }
        } catch (error) {
            console.log(error)
            toast("Hubo un error al crear el servicio!", {
                position: "top-right",
                autoClose: 1000,
                type: "error"
            });
        }
    }

    return (
        <>
            <Card>
                <ServicesForm
                    isLoading={isLoading}
                    actionAfterSubmit={() => { }}
                    titleSubmit="Grabar"
                    title="Crear Servicio"
                    onFormSubmit={submitForm}
                    defaultValues={{}}
                />
            </Card>
            <ToastContainer />
        </>
    )
}

export default CreateService