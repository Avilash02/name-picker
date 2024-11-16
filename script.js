 
function whopayying(names) {
  var numberofpeople = names.length;                                      // Get the number of people in the names array
  var randompersonposition = Math.floor(Math.random() * names.length);  // Generate a random number between 0 and numberofpeople - 1
  var randomperson = names[randompersonposition];                         // Select the person at the random position
  return randomperson + " is going to buy Coffe today";                   // Return a string indicating who will buy lunch
}

var names = [];                                                           // Array of names
function displayPayer() {                                                 // Function to display the selected person in an HTML element with id "result"
  var whopaying = whopayying(names);                                      // Call the whopayying function and store the result
  document.getElementById("result").innerText = whopaying;                // Display the result in the HTML element with id "result"
}

            // code for pusing prompted names to the names list

function addName() {
    var prompt_names = prompt("Enter a Name:");
    if (prompt_names) {  
        names.push(prompt_names);   
        displayNames();  
    }
}

            // Code for displaying list of items when we when we add the names

function displayNames() {
    var list = document.getElementById("namesList");
    list.innerHTML = "";   
    for (var i = 0; i < names.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = names[i];
        list.appendChild(listItem);
    }
}

            // Function used to clear the list of items 

function clearListItems(){                                        
  const nameList = document.getElementById("namesList");
  nameList.innerHTML = " ";
  names.length=0;
  // names.pop(length-1);
  
}

              // Dark Mode & Light Mode-Code

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})