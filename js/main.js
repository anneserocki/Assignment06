// HANDLE THE LOAD EVENT OF THE WINDOW\
window.onload = (event) => {
    event.preventDefault();
    console.log("The page is fully loaded.");
};

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btn = window.document.getElementById("btnAddEmployee");
btn.addEventListener('click', addPage, false);

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function addPage() {
    window.open('./add-employee.html', 'popup', 'width=500, hight=900');
};