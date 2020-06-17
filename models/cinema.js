const Cinema = function (films) {
  this.films = films;

  this.filmTitles = function () {
    return films.map(film => film.title)
  }


  this.findByTitle = function (filmTitle) {
    return films.find(film => {
      return film.title === filmTitle
    })
  }


  this.filterByGenre = function (genre) {
    return films.filter(film => {
      return film.genre == genre
    })
  }

  this.filterByYear = function (year) {
    return films.filter(film => {
      return film.year == year
    })
  }

  this.anyFilmsByYear = function (year) {
    return (this.filterByYear(year) === []);
  }

  this.allFilmsOver = function (mins) {
    return films.every(film => film.length > mins);
  }

  this.totalRuntime = function () {
    const total = films.reduce((runningTotal, film) => {
      return runningTotal + film.length
    }, 0)
    return total
  }

  this.filterByProperty = function (property, value) {
    return films.filter(film => {
      return film[property] === value;
    })
  }

}

module.exports = Cinema;