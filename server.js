
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const someAwesomeVar = process.env.SOME_AWESOME_VAR;
    console.log(`This message is given you by the env variable: ${someAwesomeVar}`);
    await sleep(5000);
  }
}

main();
