let InvitedGuestList = ["Hassaan.","Ahmed:","Zainab.","Ibtesam.","daeen."];

let GuestsWhoAreNotComing = InvitedGuestList[1];

console.log(GuestsWhoAreNotComing, "I can't come.");

InvitedGuestList.splice(1,1, "Aneeq.");

console.log("Good News guys! We have got a new bigger table for the dinner.");

InvitedGuestList.unshift("Qasim.");

InvitedGuestList.push("Ibad.");

let Newmemberinmiddle : number =Math.floor(InvitedGuestList.length /2);

InvitedGuestList.splice(Newmemberinmiddle,0,"Haider.");

console.log("New list of invited guests:");

InvitedGuestList.forEach(EachGuest => console.log(`I have arranged a dinner, So I hope that you will join us ${EachGuest}`));

//Information for the new dinner table won't arrive and only two guests can be invited
console.log("Alas, the new dinner table won't arrive in time so there's only room for two.");

// Removing guests from the array until only two are left using while-loop
while(InvitedGuestList.length > 2){
    let removedGuests = InvitedGuestList.pop();
    console.log(`Extremely sorry, ${removedGuests} you are not invited now as the new dinner table is not arriving soon`);
}

// Iviting the remaining guests
console.log("Invitation for the last two guest left");

InvitedGuestList.forEach(remainingguest => console.log(`Congrats ${remainingguest}, you are the lucky one's who are still invited`) );

// Removing the remaining guests
InvitedGuestList.pop();
InvitedGuestList.pop();

console.log("The Empty List:", InvitedGuestList);