const Movie = require("./movie.model");

exports.addMovie = async (newMovie) => {
  try {
    const movie = new Movie(newMovie);
    await movie.save();
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
    await Movie.updateOne(query, updateContent);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (query) => {
  try {
    await Movie.deleteOne(query);
  } catch (error) {
    console.log(error);
  }
};

