// Write your code in this file!
const currentUser = 'Anne Irungu';
const welcomeMessage = `Welcome to Flatbook!, ${currentUser}`;
console.log(welcomeMessage);
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);
const firstInitial = currentUser .slice(0,5);
const shortGreeting = 'Welcome ' + firstInitial;
console.log(shortGreeting)
console.log(firstInitial .length)
