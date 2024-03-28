const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; 

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// or we could simply write the above code as:
// const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const firstInitial = currentUser[0]

const shortGreeting = `Welcome, ${firstInitial}!`;

// we could also use:
// const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
// when using the above line of code, code line 10 would not be necessary.