import React, { useEffect, useRef } from 'react';
import { pdfjs } from 'pdfjs-dist';

const PdfViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set the PDF.js worker source
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    // Load and render the PDF
    const loadingTask = pdfjs.getDocument(pdfUrl);
    loadingTask.promise.then(pdf => {
      pdf.getPage(1).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  }, [pdfUrl]);

  return (
    <div>
      <h1>PDF Viewer</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PdfViewer;