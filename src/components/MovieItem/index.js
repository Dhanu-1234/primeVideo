import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="popup-content">
            <button
              type="button"
              aria-label="close popup"
              data-testid="closeButton"
              className="close-trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="icon-styles" />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
