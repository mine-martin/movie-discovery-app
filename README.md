# Movie Discovery Web Application

This is a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. The application consumes data from the TMDB API.

## Table of Contents

1. [Getting Started](#getting-started)
2. [User Interface](#user-interface)
3. [Technologies Used](#technologies-used)
4. [Contributors](#contributors)

## Getting Started

To get started with the application, follow these steps:

1. Git clone the project
   - `git clone https://github.com/mine-martin/movie-discovery-app.git` for https.
   - `git clone git@github.com:mine-martin/movie-discovery-app.git` for ssh.
2. `cd movie-discovery-app` to the project folder.
3. Install packages with `npm install`.
4. Run the application with `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Interface

The application features a responsive and visually appealing user interface designed to replicate the [provided design](<https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0>).

### Top 10 Movies on Homepage

- The homepage lists the top 10 movies.
- Movies are displayed in a grid layout with their movie posters.
- Each movie card displays the movie title and release date.

#### Components

- Movie Card: `[data-testid: movie-card]`
- Movie Poster: `[data-testid: movie-poster]`
- Movie Title: `[data-testid: movie-title]`
- Movie Release Date: `[data-testid: movie-release-date]`

## Technologies Used

- React.js
- TMDB API
- Figma (for UI design)

## Contributors

- [mine-martin](https://github.com/mine-martin)
