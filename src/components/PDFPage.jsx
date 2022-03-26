import { Card } from "@material-ui/core";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFPage = (props) => {
  return (
    <Card elevation={4} style={{ marginBottom: "3%" }}>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Document
          file={props.pdf}
          onLoadError={console.error}
          style={{ height: "300px", width: "100vw" }}
        >
          <Page pageNumber={1} width={props.width} />
        </Document>
        <div style={{ margin: "5% 0", fontSize: "1.5rem" }}>
          <a href={props.pdf} target="_blank">
            Open Pdf
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PDFPage;
