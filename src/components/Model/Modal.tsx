import React from 'react'

type ModalProps = {
  title: string,
  setShowModal: Function,
  children?: React.ReactNode
}

const Modal = ({ title, setShowModal, children }: ModalProps) => {
  // TODO: Listen to key press and close modal on esc
  // TODO: Close modal on click of background
  // TODO: Disable scrolling while Modal is open

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60' tabIndex={-1}>
      <div className='z-10 fixed flex items-center justify-center top-0 left-0 w-screen h-screen p-6'>
        <div className='relative w-auto pointer-events-none'>
          <div className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none bg-gray-800 text-gray-100'>
            <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-700 rounded-t-md'>
              <h2 className='text-xl font-medium tracking-wide'>
                {title}
              </h2>
              <button
                type='button'
                className='w-6 h-6 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:opacity-75 hover:no-underline'
                aria-label='Close'
                onClick={() => setShowModal(false)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </button>
            </div>
            <div className='modal-body relative p-4'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal
