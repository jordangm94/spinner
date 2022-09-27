//Note this trick does not work with your code runner extension.
//Thiis is only appearing when you run the file in terminal. 

process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);
