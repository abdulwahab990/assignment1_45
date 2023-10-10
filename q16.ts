/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest
to the end of your list. • Print a new set of invitation messages, one for each person in
your list. */


// Initial guest list
const guestlist: string[] = [
    "Guest 1",
    "Guest 2",
    "Guest 3",
    "Guest 4",
    "Guest 5",
  ];
  
  // Name of the guest who can't make it
  const guestWhoCantMakeItTo: string = "Guest 3";
  
  // New person to invite
  const newInvitees: string = "New Guest";
  
  // Additional guests to invite
  const newGuest1: string = "Additional Guest 1";
  const newGuest2: string = "Additional Guest 2";
  const newGuest3: string = "Additional Guest 3";
  
  // Find the index of the guest who can't make it
  const indexOfGuestWhoCantMakeIt: number = guestlist.indexOf(guestWhoCantMakeItTo);
  
  // Check if the guest is in the list before making changes
  if (indexOfGuestWhoCantMakeIt !== -1) {
    // Replace the guest who can't make it with the new invitee
    guestlist[indexOfGuestWhoCantMakeIt] = newInvitees;
  
    // Print the name of the guest who can't make it
    console.log(`${guestWhoCantMakeItTo} can't make it.`);
  
    // Inform about the bigger dinner table
    console.log("We found a bigger dinner table!");
  
    // Add new guests to the list
    guestlist.unshift(newGuest1); // Add to the beginning
    guestlist.splice(Math.floor(guestlist.length / 2), 0, newGuest2); // Add to the middle
    guestlist.push(newGuest3); // Add to the end
  
    // Print a new set of invitation messages
    guestlist.forEach((guest, index) => {
      console.log(`Invitation for ${guest}: Dear ${guest}, please join us for dinner.`);
    });
  } else {
    console.log(`${guestWhoCantMakeItTo} was not found in the guest list.`);
  }
  
