import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div>
      <Document
        className='drop-shadow-2xl'
        file={require('../../assets/docs/SkyeBishop_Resume.pdf')}
      >
        <Page
          className='rounded-md overflow-hidden'
          pageNumber={1}
          renderAnnotationLayer={false}
          width={768}
        />
      </Document>
      <button
        type='button'
        className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100'
      >
        Border
      </button>
    </div>
  )
}

export default Resume
