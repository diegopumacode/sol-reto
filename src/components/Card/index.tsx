
interface CardProps {
    children: React.ReactNode
    className?:string

}

// export default function Card({ title, description, children, className ,style }: Props) {
//     return (
//         <div className={`card ${className} p-0`} style={style}>
//             <div className="card-body">
//                 <h5 className="card-title">{title}</h5>
//                 <p className="card-text">{description}</p>
//             </div>
//             <div className="card-footer">
//                 {children}
//             </div>
//         </div>
//     )
// }

export function Card({ children, className }: CardProps) {
    return (
    <div className={`card ${className} p-0`}>
        {children}
    </div>)
}

export function CardBody({ children }: CardProps) {
    return (
    <div className="card-body">
        {children}
    </div>)
}

export function CardFooter({ children, className }: CardProps) {
    return (
    <div className={`card-footer w-100 ${className}`}>
        {children}
    </div>)
}