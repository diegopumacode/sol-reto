import React from 'react'

interface Props {
    children: React.ReactNode
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    rounded?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean
    loading?: boolean
    outline?: boolean
    type?: 'button' | 'submit' | 'reset'
    className?: string
}

export default function Button(
    {
        children,
        onClick,
        className,
        variant = 'primary',
        rounded = false,
        type = 'button',
        size = 'md',
        disabled = false,
        loading = false,
        outline = false }: Props) {
    return (
        <button
            className={`btn btn-${outline ? `outline-${variant}` : variant} ${rounded && 'rounded-pill'} btn-${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}>
            {loading ? '...cargando' : children}
        </button>
    )
}
