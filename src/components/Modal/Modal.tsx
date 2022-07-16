import React, { useEffect } from 'react'

type ModalProps = {
  title: string
  setShowModal: Function
  children?: React.ReactNode
}

const Modal = ({ title, setShowModal, children }: ModalProps) => {
  // Close modal on escape keypress
  const keyUpHandler = ({ key }: KeyboardEvent): void => {
    switch (key) {
      case 'Escape':
        setShowModal(false)
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', keyUpHandler)
    return () => {
      window.removeEventListener('keyup', keyUpHandler)
    }
  }, [])

  // Prevent scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <div
      id='modal-background'
      className='z-20 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60'
      tabIndex={-1}
      onClick={(event) => {
        if (event.target === document.getElementById('modal-background')) {
          setShowModal(false)
        }
      }}
    >
      <div className='z-30 fixed flex items-center justify-center top-0 left-0 w-screen h-screen p-6 pointer-events-none'>
        <div className='z-30 relative w-auto pointer-events-auto'>
          <div className='z-30 modal-content border-none shadow-lg relative flex flex-col w-full bg-clip-padding rounded-md outline-none bg-gray-800 text-gray-100'>
            <div className='modal-header flex shrink-0 items-center justify-between p-4 border-b border-gray-700 rounded-t-md'>
              <h2 className='text-xl font-medium tracking-wide'>{title}</h2>
              {/* TODO: Move close button out of header when there is no title? */}
              <button
                type='button'
                className='w-6 h-6 z-30 cursor-pointer pointer-events-auto'
                aria-label='Close'
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </button>
            </div>
            <div className='modal-body relative p-4'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
