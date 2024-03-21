/* pseduo-code
1. select the button, input field, and results
2. Attach an event listener to the date input field to capture the selected date.
3. When the user selects a date and clicks on "Calculate Age":
    i. Retrieve the selected date from the input field (get value).
    ii. Get the current date using the Date object.
    iii. check and handle empty input value
    iv. get birth date: parse the selected date to create a Date object (use new Date or date.now???).
    v. check and handle future dates
    vi. calculate the difference between bith year and current year
    vii. Handle case where age is less than a year
    viii. If the current date is before the birth date in the current year, set age as difference in years -1 otherwise return difference.
    ix. change the textcontent of the results to update tha age.
    x. clear the input field
 */

//const input = document.getElementById("birthday").value;
const button = document.getElementById("btn");
const result = document.getElementById("result");
let birthDateinputField = document.getElementById("birthday");

//listen to the click event on the button
button.addEventListener("click", calculateAge);
//calculate age function
function calculateAge() {
  const birthDateInput = birthDateinputField.value; //get the value of
  const currentDate = new Date(); //get current date
  let age = 0;
  //check for empty input
  if (!birthDateInput) {
    result.textContent = "Kindly insert your date of birth!";
    return;
  }
  const birthDate = new Date(birthDateInput); //parse input string to a date object
  //check for future date
  if (birthDate > currentDate) {
    result.textContent = `Kindly select a date that is below ${currentDate}!`; //handle future dates
    birthDateinputField.value = ""; // Clear input field
    return;
  }
  //get differences between birth year, month and day and current year, month, and day.
  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  const daysDiff = currentDate.getDay() - birthDate.getDay();
  //Check and handle if age is less than a year
  if (yearsDiff === 0) {
    //check and handle when age is less thab a month
    monthsDiff === 0
      ? (result.textContent = `Your age is ${daysDiff} days old`) // Handle when age is less than a month
      : (result.textContent = `Your age is ${monthsDiff} months old`); // handle when age is not less than a month
    birthDateinputField.value = ""; // Clear input field
    return;
  } else {
    //Check and handle when the birthmonth or birth day is not yet
    age =
      monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0) //
        ? yearsDiff - 1 // subtract 1 from the difference in years if its not yet the month or birth day.
        : yearsDiff;
    result.textContent = `Your age is ${age} years old`;
    birthDateinputField.value = ""; // Clear input field
  }
}
