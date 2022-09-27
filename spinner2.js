const spinner2 = '\r|\r/\r-\r\\\r|' + '   ';

let delay = 100;

for (const charc of spinner2) {
  setTimeout(() => {
    process.stdout.write(charc);
  }, delay);
  delay += 200;
}