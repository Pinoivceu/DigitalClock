// Function to convert day number (0-6) to day name
function daysConvert(day) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    if (day >= 0 && day <= 6) {
        return days[day];
    } else {
        return "Error";
    }
}

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();   // Get current hours
    const minutes = now.getMinutes();  // Get current minutes
    const seconds = now.getSeconds();  // Get current seconds

    // Format time to always show two digits
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Display the current time in the clock div
    document.getElementById("clock").textContent = formattedTime;
}

// Call updateClock immediately and then every second
updateClock();
setInterval(updateClock, 1000);  // Update the clock every 1 second

// Get the current day (0-6)
const now = new Date();
const day = now.getDay();

// Select the day list container
const dayList = document.getElementById("dayList");

// Loop through all days (0 to 6) and create a list item for each
for (let i = 0; i <= 6; i++) {
    const li = document.createElement("li");
    li.textContent = daysConvert(i);

    // Highlight the current day
    if (i === day) {
        li.style.fontWeight = "bold";  // Make current day bold
        li.style.color = "red";  // Highlight the current day in red
    }

    // Append the list item to the day list
    dayList.appendChild(li);
}
