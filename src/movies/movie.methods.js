const Movie = require("./movie.model");

exports.addMovie = async (newMovie) => {
  try {
    const movie = new Movie(newMovie);
    const add = await movie.save();
    console.log(add);
  } catch (error) {
    console.log(error);
  }
};

exports.findMovie = async (query) => {
  try {
    const list = await Movie.find(query);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (query, updateContent) => {
  try {
    const update = await Movie.updateOne(query, updateContent);
    console.log(update);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (query) => {
  try {
    const del = await Movie.deleteOne(query);
    console.log(del);
  } catch (error) {
    console.log(error);
  }
};
