// HANDLE THE LOAD EVENT OF THE WINDOW\

window.onload = (event) => {
    event.preventDefault();
    let empOutput = window.document.getElementById('loginDetails');
    empOutput.innerText = '';
    console.log("The page is fully loaded.");        
};

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btn = window.document.getElementById("btnAddEmployee");
btn.addEventListener('click', popWindow, false);

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function popWindow() {
    // window.open('./add-employee.html', 'addEmployee', '');
    let popWindow = window.open('./add-employee.html', 'addEmployee','width=200, height=200');
    console.log('Popup window has opened.');
};