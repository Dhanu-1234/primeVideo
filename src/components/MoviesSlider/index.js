import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList, category} = props
  const updatedMoviesList = moviesList.filter(
    eachObj => eachObj.categoryId === category,
  )
  console.log(updatedMoviesList)

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {updatedMoviesList.map(eachObj => (
          <MovieItem movieDetails={eachObj} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
