// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
//  dinner. Then use your list to print a message to each {person, inviting them to}

let guest_list:string[] = ["Hamza", "Abdullah", "Hassan"];
for(let g = 0; g<guest_list.length; g++){
    console.log(`Dear ${guest_list[g]} , I would like to invite you for dinner tonight at my place ! `);
}