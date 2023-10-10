// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of
// the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

const guestList:string [] = [
    "guest 1",
    "guest 2",
    "guest 3",
    "guest 4",
    "guest 5",
]

// guest who cant make it
const guestWhoCantMakeIt:string = "guest 3";

// new invitee
const newInvitee:string = "new guest";

// Find the index of the guest who can't make it
const indexofGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt) 
// console.log(indexofGuestWhoCantMakeIt)
//Check if the guest is in the list before making changes
if(indexofGuestWhoCantMakeIt !== -1){
    guestList[indexofGuestWhoCantMakeIt] = newInvitee;
      // Print the name of the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it.`)

    guestList.forEach((guest, index) => {
        console.log(`Invitation for ${guest}: Dear ${guest}, please join us for dinner.`);
    });
}else{
    console.log(`${guestWhoCantMakeIt} was not found in the guest list.`);

}
