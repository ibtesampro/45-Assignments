var InvitedGuestList = ["Hassaan.", "Ahmed:", "Zainab.", "Ibtesam.", "daeen."];
var GuestsWhoAreNotComing = InvitedGuestList[1];
console.log(GuestsWhoAreNotComing, "I can't come.");
InvitedGuestList.splice(1, 1, "Aneeq.");
console.log("Good News guys! We have got a new bigger table for the dinner.");
InvitedGuestList.unshift("Qasim.");
InvitedGuestList.push("Ibad.");
var Newmemberinmiddle = Math.floor(InvitedGuestList.length / 2);
InvitedGuestList.splice(Newmemberinmiddle, 0, "Haider.");
console.log("New list of invited guests:");
InvitedGuestList.forEach(function (EachGuest) { return console.log("I have arranged a dinner, So I hope that you will join us ".concat(EachGuest)); });