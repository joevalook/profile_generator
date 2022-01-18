const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s  your name? Nicknames are also acceptable 😃 : ', (answer1) => {
  rl.question('What\'s an activity you like doing : ', (answer2) => {
    rl.question('What do you listen to while doing that? : ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) : ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? : ', (answer5) => {
          rl.question('Which sport is your absolute favourite? : ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! : ', (answer7) => {
                console.log(`${answer1} loves listening to ${answer3} while ${answer2}. A lot of their happiness comes from eating ${answer5} during ${answer4}. They absolutely love ${answer6} and is absolutely astonshing at ${answer7}`);
                rl.close();
            });
          });
        });
      });
    });
  });
});