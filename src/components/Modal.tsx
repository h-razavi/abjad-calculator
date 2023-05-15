import React from 'react'

type Props = {
    children: React.ReactNode
}

function Modal({children}: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm max-w-[80vw] max-h-[90vh] overflow-auto md:overflow-hidden mx-auto z-20">
      <div className="bg-slate-300 p-8 rounded-lg shadow-lg text-center">
        {children}
      </div>
    </div>
  )
}

export default Modal