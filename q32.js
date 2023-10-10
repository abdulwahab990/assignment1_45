"use strict";
/*32. Checking Usernames: Do the following to create a program that simulates how
websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the
new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If
it has, print a message that the person will need to enter a new username. If a username
has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
not be accepted.*/
//checking username : array of current users
const currentUsers = ["StellarGazer92", "MidnightJazz", "ElectricEchoes", "QuantumQuirk", "SereneBreeze"];
// array of new users
const newUsers = ["StellarGazer92", "EnigmaWhisper", "NebulaNomad", "QuantumQuirk", "AuroraScribe"];
// convert into lower case
const currentUsersLower = currentUsers.map(user => user.toLowerCase());
// now put for loop tp check username
for (const newUser of newUsers) {
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is not available. Please choose a different username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
