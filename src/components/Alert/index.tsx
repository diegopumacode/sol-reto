import React from 'react'

type Props = {
    children: React.ReactNode
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

const Alert = ({children, variant = 'primary'}: Props) => {
  return (
    <div className={`alert alert-${variant}`}>
        {children}
    </div>
  )
}

export default Alert