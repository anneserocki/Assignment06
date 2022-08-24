// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', (e) => {
    e.preventDefault();
    console.log("The popup page is fully loaded.")
});

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let formWidth = 800;
let formHeight = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(formWidth, formHeight);
console.log('The page size has been changed.');

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - formWidth) / 2), ((window.screen.height - formHeight) / 2));
console.log('The page is at the center of the page.')

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    // Get form, button elements
    let empForm = window.document.getElementById('empForm');
    let submitBtn = window.document.getElementById('submit');
    let cancelBtn = window.document.getElementById('cancel'); 

    // Get all elements related to employees' properties.
    let empID = window.document.getElementById('id');
    let empName = window.document.getElementById('name');
    let empExt = window.document.getElementById('extension');
    let empEmail = window.document.getElementById('email');
    let empDept = window.document.getElementById('department');

    function helper() {
        
    };

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
cancelBtn.addEventListener('click', () => {
    window.close();
}, false);

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
empForm.addEventListener('click', (e) => e.preventDefault(), false);
console.log('Prevent the submission of the form');

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

let idValue = window.document.getElementById('id').value;
let nameValue = window.document.getElementById('name').value;
let extValue = window.document.getElementById('extension').value;
let emailValue = window.document.getElementById('email').value;
let departValue = window.document.getElementById('department').value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

let outputElement = window.opener.document.getElementById('loginDetails');
console.log(outputElement);

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
outputElement.innerText = 'ID: + ${idValue} Name: + ${nameValue} Extension: + ${extValue} Email: + ${emailValue} Department: + ${department}';

// CLOSE THE POPUP
if (window.confirm('Have you finished all?')) {
    window.close();
} else {
    window.open();
};

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
