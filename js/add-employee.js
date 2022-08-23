// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', ()=>{
    let newWindow = window.opener.document.getElementById('loginDetails');
    newWindow.preventDefault;
    console.log("The page is fully loaded.")
});

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let formWidth = 800;
let formHeight = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
newWindow.resizeTo(formWidth, formHeight);
console.log('The page size has been changed to the set value.')

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
newWindow.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
function helper() {
    let empForm = window.opener.document.getElementById('empForm');
    let submitBtn = window.opener.document.getElementById('submit');
    let cancelBtn = window.opener.document.getElementById('cancel');   
};

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
cancelBtn.addEventListener('click', ()=>{
    newWindow.close();
}, false);

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let empID = window.opener.document.getElementById('id').value;
let empName = window.opener.document.getElementById('name').value;
let empExt = window.opener.document.getElementById('extension').value;
let empEmail = window.opener.document.getElementById('email').value;
let empDept = window.opener.document.getElementById('department').value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP
newWindow.close();

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE