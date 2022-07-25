import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import useEventListener from '@use-it/event-listener'
import Download from '../../assets/icons/download.svg'

// TODO: Add skeleton loader with same dimensions
const Resume = () => {
  const [pageWidth, setPageWidth] = useState(0)
  const calcPageWidth = () => {
    if (window.innerWidth < 480) {
      setPageWidth(window.innerWidth - 48)
    } else if (window.innerWidth < 640) {
      setPageWidth(480 - 48)
    } else if (window.innerWidth < 768) {
      setPageWidth(640 - 48)
    } else if (window.innerWidth < 1024) {
      setPageWidth(768 - 48)
    } else if (window.innerWidth < 1280) {
      setPageWidth(1024 - 48)
    } else if (window.innerWidth < 1536) {
      setPageWidth(1280 - 48)
    } else {
      setPageWidth(1536 - 48)
    }
  }
  useEventListener('resize', calcPageWidth)

  const pdfSrc = require('../../assets/docs/SkyeBishop_Resume.pdf')
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div>
      <Document className='drop-shadow-2xl' file={pdfSrc}>
        <Page
          className='rounded-md overflow-hidden'
          pageNumber={1}
          renderAnnotationLayer={false}
          width={pageWidth}
        />
      </Document>
      <a href={pdfSrc} target='blank' rel='noopener noreferrer'>
        <button
          type='button'
          className='flex mt-4 mx-auto items-center px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100'
        >
          <img src={Download} className='inline mr-2 h-4 w-4' />
          Download Resume
        </button>
      </a>
    </div>
  )
}

export default Resume
