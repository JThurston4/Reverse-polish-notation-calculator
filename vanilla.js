let answers = [];

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input === 'q') {
    process.exit();
  } else {
    answers.push(input)
  }
});

process.on('exit', () => {
  console.log(answers);
  process.stdout.write("\n");
})


