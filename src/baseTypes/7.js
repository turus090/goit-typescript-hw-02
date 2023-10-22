/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Weekday;
(function (Weekday) {
    Weekday["Sunday"] = "Sunday";
    Weekday["Monday"] = "Monday";
    Weekday["Tuesday"] = "Tuesday";
    Weekday["Wednesday"] = "Wednesday";
    Weekday["Thursday"] = "Thursday";
    Weekday["Friday"] = "Friday";
    Weekday["Saturday"] = "Saturday";
})(Weekday || (Weekday = {}));
function isWeekend(day) {
    return day === Weekday.Saturday || day === Weekday.Sunday;
}
