import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <Document
      className='w-fit mx-auto drop-shadow-2xl'
      file={require('../../assets/docs/SkyeBishop_Resume.pdf')}
    >
      <Page
        className='rounded-md overflow-hidden'
        pageNumber={1}
        renderAnnotationLayer={false}
      />
    </Document>
  )
}

export default Resume
