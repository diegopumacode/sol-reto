interface CardProps {
    children: React.ReactNode
    className?:string

}

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