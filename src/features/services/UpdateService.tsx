import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Service, updateService } from '../../api/services'
import { Modal } from 'react-responsive-modal';
import Button from '../../components/Button';
import ServicesForm from '../../components/Form/ServicesForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-responsive-modal/styles.css';

type Props = {
    service: Service
}

const UpdateService = ({ service }: Props) => {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(updateService)
    const [show, setShow] = useState(false)

    const openModal = () => {
        setShow(true)
    }

    const onFormSubmit = async (values: any, reset: any) => {
        try {
            let response = await mutateAsync({ ...values, id: service.id })
            queryClient.invalidateQueries("services")
            if (response) {
                setShow(false)
                reset()
                toast("Servicio actualizado con exito!", {
                    position: "top-right",
                    autoClose: 1000,
                    type: "success"
                });
            }
        } catch (error) {
            console.log(error)
            toast("Servicio creado con exito!", {
                position: "top-right",
                autoClose: 1000,
                type: "error"
            });
        }
    }



    return (
        <div>
            <Button onClick={openModal} variant='link'>
                Editar
            </Button>

            <Modal open={show} onClose={() => { setShow(!show) }} center={true} closeOnOverlayClick={true}>

                <div className='container' style={{minWidth:'300px'}}>
                    <ServicesForm
                        isLoading={isLoading}
                        actionAfterSubmit={() => { }}
                        titleSubmit="Editar"
                        title="Editar Servicio"
                        onFormSubmit={onFormSubmit}
                        defaultValues={service}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default UpdateService