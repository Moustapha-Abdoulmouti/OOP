function showContent(id) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function addJobOffer() {
    const companyNumber = document.getElementById('companyNumber').value;
    const companyAddress = document.getElementById('companyAddress').value;
    const interviewDate = document.getElementById('interviewDate').value;
    const phone = document.getElementById('phone').value;
    const natureOfWork = document.getElementById('natureOfWork').value;
    const workType = document.getElementById('workType').value;

    const table = document.getElementById('jobOffersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${companyNumber}</td>
        <td>${companyAddress}</td>
        <td>${interviewDate}</td>
        <td>${phone}</td>
        <td>${natureOfWork}</td>
        <td>${workType}</td>
        <td>
            <button onclick="editJobOffer(this)">Edit</button>
            <button onclick="deleteJobOffer(this)">Delete</button>
        </td>
    `;
}

function editJobOffer(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');
    document.getElementById('companyNumber').value = cells[0].innerText;
    document.getElementById('companyAddress').value = cells[1].innerText;
    document.getElementById('interviewDate').value = cells[2].innerText;
    document.getElementById('phone').value = cells[3].innerText;
    document.getElementById('natureOfWork').value = cells[4].innerText;
    document.getElementById('workType').value = cells[5].innerText;
    row.remove();
}

function deleteJobOffer(button) {
    button.parentNode.parentNode.remove();
}

function printJobOffers() {
    const originalContent = document.body.innerHTML;
    const printContent = document.getElementById('jobOffersTable').outerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}