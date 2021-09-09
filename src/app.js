require("./db/connection");
const mongoose = require("mongoose");
const {
  addMovie,
  findMovie,
  updateMovie,
  deleteMovie,
} = require("./movies/movie.methods");

const command = process.argv.slice(2);

const app = async () => {
  if (command[0] === "add") {
    const newMovie = {
      name: command[1],
      genre: command[2],
      year: command[3],
    };

    await addMovie(newMovie);
  }
  if (command[0] === "find") {
    const query = {};

    for (let i = 1; i < command.length; i += 2) {
      query[command[i]] = command[i + 1];
    }
    await findMovie(query);
  }

  if (command[0] === "update") {
    const query = {};
    const updateContent = { $set: {} };

    const queryArr = command[1].split(/[=/]/);

    for (let i = 0; i < queryArr.length; i += 2) {
      query[queryArr[i]] = queryArr[i + 1];
    }

    for (let i = 0; i < command.length; i += 2) {
      updateContent.$set[command[i]] = command[i + 1];
    }

    await updateMovie(query, updateContent);
  }

  if (command[0] === "delete") {
    const query = {};
    for (let i = 1; i < command.length; i += 2) {
      query[command[i]] = command[i + 1];
    }
    await deleteMovie(query);
  }

  mongoose.disconnect();
};

app();

// const arrStr = `a:1,b:2,c:3`;
// console.log(arrStr.split(/[:,]/));
