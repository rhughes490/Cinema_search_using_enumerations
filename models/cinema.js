const Cinema = function (films) {
  this.films = films;

  this.filmTitles = function (films) {
    return this.films.map(film => film.title)
  }


}

module.exports = Cinema;