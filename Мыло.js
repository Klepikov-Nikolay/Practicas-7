const allEmails = ['rat@mail.com', 'rat1@email.com', 'rat2@email.com',  'mouse@email.com', 'mouse1@email.com', 'mouse2@email.com', 'mouse3@email.com', 'mouse4@email.com', 'rat3@email.com', 'rat4@email.com'];
const blackList = ['mouse@email.com', 'mouse1@email.com', 'mouse2@email.com', 'mouse3@email.com', 'mouse4@email.com'];
let validAll = [];
function generateValid(allE, black) {
    for (let indexAll in allE) {
        if (!black.includes(allE[indexAll])) {
            validAll.push(allE[indexAll]);
        }
    }
    return validAll;
}
let validEmails = generateValid(allEmails, blackList);
console.log(validEmails);