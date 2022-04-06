import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import Modal from 'react-responsive-modal'
import Button from '../../components/Button'
import { delService } from '../../services/services'
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    id: number
}

export default function DeleteService({ id }: Props) {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(delService)
    const [show, setShow] = useState(false)


    const openModal = () => {
        setShow(true)
    }

    const cancel = () => {
        setShow(false)
    }

    const deleteService = async () => {
        try {
            let response = await mutateAsync(id)
            queryClient.invalidateQueries("services")
            if (response) {
                toast("Servicio eliminado con exito!", {
                    position: "top-right",
                    autoClose: 1000,
                    type: "success"
                });
                setShow(false)
            }
        } catch (error) {
            console.log(error)
            toast("Hubo un error al eliminar el servicio!", {
                position: "top-right",
                autoClose: 1000,
                type: "error"
            });
        }

    }
    return (
        <>
            <Button onClick={openModal} variant='link'>
                Eliminar
            </Button>

            <Modal open={show} onClose={() => { setShow(!show) }} center={true} showCloseIcon={true} closeOnOverlayClick={true}>
                <p className='fs-4 font-bold mt-4'>Seguro que desea eliminar servicio?</p>
                <div className='d-flex gap-2'>
                    <Button variant='success' onClick={deleteService}>
                        Eliminar Servicio
                    </Button>

                    <Button variant='danger' outline onClick={cancel}>
                        Cancelar
                    </Button>
                </div>

            </Modal>
            <ToastContainer />
        </>
    )
}