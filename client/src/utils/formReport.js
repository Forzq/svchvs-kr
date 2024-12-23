import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useContext } from 'react';
import { Context } from '../index';
const HandleDownloadPDF=()=> {
    const {product} = useContext(Context)

    const accessToken = localStorage.getItem('token');
    const userInfo = jwtDecode(accessToken); // Use jwt-decode to get user info

    const pdfDoc = new jsPDF();
    pdfDoc.setFont("times", "bold");
    pdfDoc.setFontSize(14);
    pdfDoc.setCharSpace(0.5);
    const formattedDate = new Date().toLocaleDateString();
    pdfDoc.text(`All users report. Date: ${formattedDate}`, 10, 10);
    pdfDoc.text(`Creator of report: ${userInfo.email}`, 10,20)
    
  const firstTableColumns = [
    { title: "Название товара", field: "name" },
    { title: "Цена", field: "cost" },
  ];
   
    

    autoTable(pdfDoc, {
        theme: "grid",
        headStyles: { fontSize: 10 },
        bodyStyles: { fontSize: 8, fontStyle: "italic" },
        columns: firstTableColumns,
        body: product.products,
        startY: 30, // Adjust starting position as needed
    });


  pdfDoc.save("Отчет_о_продажахff.pdf");
};
  export default  HandleDownloadPDF