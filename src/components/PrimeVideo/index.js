import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="prime-video-container">
      <div className="prime-video-banner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-banner"
        />
      </div>
      <div className="content-container">
        <div className="action-movies-container">
          <h2 className="heading">Action Movies</h2>
          <MoviesSlider moviesList={moviesList} category="ACTION" />
        </div>
        <div className="comedy-movies-container">
          <h2 className="heading">Comedy Movies</h2>
          <MoviesSlider moviesList={moviesList} category="COMEDY" />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
