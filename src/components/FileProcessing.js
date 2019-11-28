

export function GenerateRND(jokeLength) {
  const min = 0 +1; //5 is to stop out of bound errors
    const max = jokeLength - 1;   //  26731 - 5; //26731
  const rnd = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("rnd " + rnd);
  return rnd;
}
