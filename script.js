const dayTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();
const months = ["January", "February", "March", "April", "May", "June, July", 
              "August", "September", "October", "November", "December"]
