function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const players = ["Tina", "Jorge", "Julien"];

    players.forEach(async (player) => {
      try {
        const result = await luckyDraw(player);
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    });
  } catch (error) {
    console.error("Error trying to get the results: ", error);
  }
}

getResults();
