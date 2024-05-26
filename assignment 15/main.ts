let InvitedGuestList = ["Hassaan.","Ahmed:","Zainab.","Ibtesam.","daeen."];
let GuestsWhoAreNotComing = InvitedGuestList[1];
console.log(GuestsWhoAreNotComing, "I can't come.");
InvitedGuestList.splice(1,1, "Aneeq.");
InvitedGuestList.forEach(EachGuest => console.log(`I have arranged a dinner, So I hope that you will join us ${EachGuest}`));