const dayTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();
const months = ["January", "February", "March", "April", "May", "June, July", 
"August", "September", "October", "November", "December"];
const renderCalendar = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
  lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
  lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(),
  lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
  }
  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  dayTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth, new Date().getDate());
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    }
    renderCalendar();
  });
});