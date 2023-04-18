let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')

plus.addEventListener('click', () => {
    const a = parseInt(input1.value);
    const b = parseInt(input2.value);
    const result = a + b;
    console.log('результат', result);
  });

  minus.addEventListener('click', () => {
    const a = parseInt(input1.value);
    const b = parseInt(input2.value);
    const result = a - b;
    console.log('результат:', result);
  });