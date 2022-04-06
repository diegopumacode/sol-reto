import { useForm } from 'react-hook-form';
import Button from '../Button'

type Props = {
    title: string
    defaultValues?: any
    onFormSubmit: (values: any, reset:()=>void) => void
    actionAfterSubmit: () => void
    isLoading: boolean
    titleSubmit: string
}

const ServicesForm = ({ title, defaultValues, onFormSubmit, isLoading, actionAfterSubmit, titleSubmit }: Props) => {

    const { register, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = handleSubmit((data, e) => {
        e?.preventDefault()
        onFormSubmit(data, reset)
        actionAfterSubmit()
    })

    return (
        <form className="card-body w-100" onSubmit={onSubmit}>
            <h5 className="card-title">{title}</h5>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" {...register("name")} className="form-control" id="formGroupExampleInput" placeholder="Ingrese el nombre el servicio" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <input type="text" {...register("description")} className="form-control" id="formGroupExampleInput2" placeholder="Ingrese la descripcion del servicio" required/>
            </div>
            <div className='d-flex gap-2'>
            <Button variant="success" type='submit' onClick={() => onSubmit} disabled={isLoading} outline>
                {isLoading ? '...cargando' : titleSubmit}
            </Button>
            <Button disabled={isLoading} variant="danger" type='reset' onClick={() => {
                reset()
            }} outline>
                Cancelar
            </Button>
            </div>
        </form>
    )
}

export default ServicesForm