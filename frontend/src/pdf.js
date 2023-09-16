
function printDocument() {
    const input = document.getElementById('pdf');
    html2canvas(input,{logging: true,letterRendering: 1,useCORS: true}).then(canvas =>{
        const imgwidth= 208;
        const imgHeight = canvas.height * imgwidth/canvas.width;
        const imgData = canvas.toDataURL('img/png'); 
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(
            imgData, 'PNG',0,0,imgwidth,imgHeight
        );
        pdf.save('CV.pdf');
    })
  }