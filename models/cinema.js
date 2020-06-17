const Cinema = function (films) {
  this.films = films;

  this.filmTitles = function (films) {
    return this.films.map(film => film.title)
  }


  this.findByTitle = function (filmTitle) {
    return this.films.find(film => {
      return film.title === filmTitle
    })
  }
}

module.exports = Cinema;