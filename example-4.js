// Calculate body mass index for a person
// bmi = greutatea / inaltime * 2 

const weight = '88,3';
const height = '1.75';

//parseInt -> converteste dintr-un string un numar intreg
//parseFloat -> converteste dintr-un string un numar decimal, cu virgula
//Number("23")

const weightReplaced = weight.replace(',','.');
const weightAsNumber = Number.parseFloat(weightReplaced);

const heightAsNumber = Number.parseFloat(height);

const bmi = weightAsNumber / (heightAsNumber * heightAsNumber);

console.log(bmi)