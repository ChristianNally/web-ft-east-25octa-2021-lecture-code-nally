export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};



export const robotChoice = (playerSelection, cheating) => {
  return "Moai";
};

// export const robotChoice = (playerSelection, cheating) => {

// NOTE: instead of a long set of ifs, how about this...

//   const winning = {
//     Tree: 'Axe',
//     Axe: 'Moai',
//     Moai: 'Tree'
//   };
//   if (cheating) {
//     return winning[playerSelection];
//   }

//   const options = ['Moai', 'Axe', 'Tree'];
//   const randomIndex = Math.floor(Math.random() * options.length);
//   return options[randomIndex];
// };
