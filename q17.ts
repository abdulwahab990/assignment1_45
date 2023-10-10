/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re
still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program. */

// Initial guest list
const guestL_ist: string[] = [
    "Guest 1",
    "Guest 2",
    "Guest 3",
    "Guest 4",
    "Guest 5",
    "New Guest", // Added in Exercise 16
    "Additional Guest 1", // Added in Exercise 16
    "Additional Guest 2", // Added in Exercise 16
    "Additional Guest 3", // Added in Exercise 16
  ];
  
  // Print a message about the limited space
  console.log("Sorry, we can invite only two people for dinner.");
  
  // Remove guests until only two names remain
  while (guestL_ist.length > 2) {
    const removedGuest = guestL_ist.pop(); // Remove the last guest
    if (removedGuest) {
      console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
  }
  
  // Print messages to the two remaining guests
  guestL_ist.forEach((guest) => {
    console.log(`Invitation for ${guest}: Dear ${guest}, you're still invited to dinner.`);
  });
  
  // Remove the last two names to have an empty list
  guestL_ist.pop();
  guestL_ist.pop();
  
  // Print the list to confirm it's empty
  console.log("Guest list is now empty:", guestL_ist);
  