switch (new Date().getDay()) {
    case 0:
        day = "This is weekend";
        break;
    case 5:
    case 1:
    case 2:
    case 3:
    case 4:
        day = "Today is workingday";
        break;
    default:
        day = "Looking forward to the weekend"
}
console.log(day);
document.write(day);
