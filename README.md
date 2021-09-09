"# film-app-mongoose"
This app requires you to run "npm i" and add a .env file with a valid MONGO_URI to work

## test data:

- Okja Sci-fi 2017
- "The Matrix" Sci-fi 1999
- Fyre Documentary 2019
- "Schindler's List" Drama 1993
- "The Wolf of Wall Street" Comedy 2013
- Deadpool Comedy 2016
- Gladiator Action 2000
- Arrival Sci-fi 2016

## Add Movie

- node src/app.js add "movie name" "movie genre" "release year"
- example: node src/app.js add "Gladiator" "Action" "2000"

## Find all movies

- node src/app.js find

## Find movie with filter

- node src/app.js find "object key" "object value"
- you can use more than one object as filter

- example: node src/app.js find "genre" "Sci-fi" "year" "1999"

## Update

- node src/app.js update "object key"/"object value" "newObj key" "newObj value"
- you can use more than one object as filter and update content
- example: node src/app.js update "genre"/"Sci-fi"/"year"/"2016"/ "year" "2017"

## Delete

- node src/app.js delete "object key" "object value"
- you can use more than one object as filter
