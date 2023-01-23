import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import useEventListener from '@use-it/event-listener'
import Download from '../../assets/icons/download.svg'

const calcPageWidth = (width: number) => {
  if (width < 480) {
    return width - 48
  } else if (width < 640) {
    return 480 - 48
  } else if (width < 768) {
    return 640 - 48
  } else if (width < 1024) {
    return 768 - 48
  } else if (width < 1280) {
    return 1024 - 48
  } else {
    return 1008 // 64rem
  }
}

// TODO: Add skeleton loader with same dimensions
const Resume = () => {
  const [pageWidth, setPageWidth] = useState(calcPageWidth(window.innerWidth))
  useEventListener('resize', () =>
    setPageWidth(calcPageWidth(window.innerWidth))
  )

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
