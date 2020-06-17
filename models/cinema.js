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

  this.allFilmsOver = function (mins) {
    return films.every(film => film.length > mins);
  }

}

module.exports = Cinema;