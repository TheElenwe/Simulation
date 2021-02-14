let daynight = 0;
let count = 2;

let counter = setInterval(function () {
  daynight += count;
  if (daynight === 0 || daynight === 24) {
    count = -count;
  }
  console.log(daynight)
  if (daynight <= 8) {
    console.log(`\u00b0 on`);
  } else if (daynight >= 16) {
    console.log(`\u00b0 of`);
  }
}, 1000);

