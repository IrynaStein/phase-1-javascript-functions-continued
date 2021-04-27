// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
};

mondayWork('work from home');

function wrapAdjective(wrap='*'){
    return function (p1='special'){
        return `You are ${wrap}${p1}${wrap}!`
    }
};
wrapAdjective ()()

// function outer(greeting, msg="It's a fine day to learn") {
//     return function(name, lang="Python") {
//       return `${greeting}, ${name}! ${msg} ${lang};`
//     }
//   }

//   function outer(greeting, msg="It's a fine day to learn") {
//     const innerFunction =  function(name, lang="Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     }
//     return innerFunction;
//   } 
//outer("Hello")("student", "JavaScript");

//Implement a function called wrapAdjective:

// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function 
// received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!" 