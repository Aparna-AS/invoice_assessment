document.getElementById('download-pdf').addEventListener('click', function () {
    // Get the invoice content
    var invoiceContent = document.querySelector('.invoice-box');
    
    // Use html2canvas to take a snapshot of the HTML content
    html2canvas(invoiceContent).then(canvas => {
        var imgData = canvas.toDataURL('image/png'); // Convert canvas to image
        var doc = new jspdf.jsPDF('p', 'mm', 'a4'); // Create jsPDF instance
        
        // Add the image to the PDF
        doc.addImage(imgData, 'PNG', 10, 10, 190, 280); // Adjust the image size to fit A4
        
        // Save the generated PDF
        doc.save('invoice.pdf');
    });
});
