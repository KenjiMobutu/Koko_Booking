import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faPlane} from '@fortawesome/free-solid-svg-icons'
import { faEarthAfrica} from '@fortawesome/free-solid-svg-icons'
import { faCar} from '@fortawesome/free-solid-svg-icons'
import { faDharmachakra} from '@fortawesome/free-solid-svg-icons'
import { faTaxi} from '@fortawesome/free-solid-svg-icons'
import "./header.css"



function Header() {

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem selected">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarthAfrica} />
            <span>Flight + Hotel</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faDharmachakra} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDescription">Search low prices on hotels, homes and much more...</p>
        <button className="headerBtn"></button>
      </div>
    </div>
  )
}

export default Header
