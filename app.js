function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const param1 = params.get('param1');
    const param2 = params.get('param2');
    
    return { param1, param2 };
}

function displayParams() {
    const { param1, param2 } = getQueryParams();

    // Display the received parameters
    const output = document.getElementById('output');

    document.getElementById('content').innerHTML += param1;

    document.getElementById('contentAr').innerHTML += param2;

    generatePDF();
}


function generatePDF() {
    const { jsPDF } = window.jspdf;

    var headerImage = 'data:image/png;base64,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';


    //const element = document.getElementById('content');


    const element = document.getElementById('mainTable');

    html2pdf().from(element).set({
      margin: [30, 30, 30, 30], // [top, right, bottom, left] in millimeters
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all', after: '.breakPage' },
      html2canvas: { scale: 2 }
    }).toPdf().get('pdf').then(function (pdf) {
      const totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);

        // Header
        pdf.addImage(headerImage, 'JPEG', 10, 10, 20, 20); // Adjust as needed

        // Footer
        pdf.setFontSize(10);
        pdf.text(`Page ${i} of ${totalPages}`, 105, 285, { align: 'center' });
      }
    }).save('sample-file.pdf');

  };

// Call the function to display parameters
displayParams();
