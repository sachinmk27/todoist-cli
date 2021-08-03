const fetch = require("node-fetch");
const chalk = require("chalk");

const TOKEN = "";

function getActiveTasks() {
  fetch("https://api.todoist.com/rest/v1/tasks", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json());
}

// getActiveTasks();
console.log(chalk.blue("Hello world!"));
