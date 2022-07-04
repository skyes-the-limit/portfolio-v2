import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import Download from '../../assets/icons/download.svg'

const Resume = () => {
  const pdfSrc = require('../../assets/docs/SkyeBishop_Resume.pdf')
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div>
      <Document className='drop-shadow-2xl' file={pdfSrc}>
        <Page
          className='rounded-md overflow-hidden'
          pageNumber={1}
          renderAnnotationLayer={false}
          width={768}
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
