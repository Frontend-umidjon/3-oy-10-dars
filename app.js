// Loop mavzusidan for ga doir masalalar

// 1-masala
{
  let k = 66;
  let n = 15;
  for (let i = 1; i <= n; i++) {
    console.log(k);
  }
}
// 2-masala
{
  let a = 4;
  let b = 18;
  let count = 0;
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
  for (let i = a; i <= b; i++) {
    count++;
  }
  console.log(`count = ${count}`);
}
// 3-masala
{
  let a = 4;
  let b = 18;
  let count = 0;
  for (let i = b - 1; i > a; i--) {
    console.log(i);
  }
  for (let i = b - 1; i > a; i--) {
    count++;
  }
  console.log(`count = ${count}`);
}

// 4-masala
{
  let price = 16;
  let count = 5;
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price;
  }
  console.log(sum);
}

// 5-masala
{
  let price = 16;
  let count = 0.5;
  let sum = 0;
  for (let i = 0; i <= count; i += 0.1) {
    sum = i * price;
  }
  console.log(sum.toFixed(2));
}
// 6-masala
{
  let price = 16;
  let count = 1.2;
  let sum = 0;
  for (let i = 0; i <= count; i += 0.2) {
    sum = i * price;
  }
  console.log(sum.toFixed(2));
}
//  7-masala
{
  let a = 4;
  let b = 6;
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  console.log(sum);
}
//  8-masala
{
  let a = 4;
  let b = 6;
  let multiple = 1;
  for (let i = a; i <= b; i++) {
    multiple *= i;
  }
  console.log(multiple);
}
// 9-masala
{
  let a = 4;
  let b = 5;
  let square = 0;
  for (let i = a; i <= b; i++) {
    square += i ** 2;
  }
  console.log(square);
}

// 10-masala
{
    let n = 2;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    console.log(sum);
}
