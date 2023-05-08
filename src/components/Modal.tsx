import React from 'react'

type Props = {
    children: React.ReactNode
}

function Modal({children}: Props) {
  return (
    <div>
        this is a test
        {children}
        </div>
  )
}

export default Modal