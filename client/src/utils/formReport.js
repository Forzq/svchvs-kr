import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { useContext } from 'react';
import { Context } from '../index';
const HandleDownloadPDF=()=> {
    const {product} = useContext(Context)

  const pdfDoc = new jsPDF();
  pdfDoc.text("Отчет о продажах за месяц", 20, 20);

  const firstTableColumns = [
    { title: "Название товара", field: "name" },
    { title: "Цена", field: "cost" },
  ];


  autoTable(pdfDoc, {
    theme: "grid",
    headStyles: { fontSize: 12, fillColor: [200, 200, 200] }, // Серый заголовок
    bodyStyles: { fontSize: 10 },
    columns: firstTableColumns,
    body: product.products,
  });


  pdfDoc.save("Отчет_о_продажах.pdf");
};
  export default  HandleDownloadPDF