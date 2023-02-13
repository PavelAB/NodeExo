// //Import du module litteral
// const fH=require('./Litteral/firstHello');
// console.log(fH);

// //Import du module "class"
// let person=require('./ClassModule/person');
// let pavel = new person(1,'Bezukladnikov','Pavel',new Date(1996,0,22));
// let aude = new person(1,'Berive','Aude',new Date(1989,9,16));

// console.log(aude.presentation);
// console.log(pavel.presentation);

// //Import du module fonction
// const msg1=require('./FunctionModule/msg');
// msg1('C\'est bientot le weekend!!!!!');
// msg1();

// //Import du module objet
// const msg2 = require('./ObjetModule/msg');
// msg2.info('Plus qu\'environ 1h avant le weekend');
// msg2.warning('AAAAAAAAAAAAAAAaaaa ce est bientot le weekend');
// msg2.error('Je suis deja en weekend!!!!!');



// const date1=require('./ObjetModule/CalculDate')
// let test = new date1(new Date('2023-12-25'));

// console.log(`Date donner ${test.date}`);
// console.log(`Date ajd ${test.ajd}`);
// console.log(`Result ${test.test} jours`);

const date1=require('./ObjetModule/CalculDate')
date1.jourAvantNextNoel();
date1.jourAvantNextBD();
date1.coucou();
