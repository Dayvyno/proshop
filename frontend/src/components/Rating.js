import React from 'react'
// import PropTypes from 'prop-types'


const Rating = ({value, text, color}) => {
  return (
    <div className='rating'>
      <span>
        <span className="material-icons" style={{color}}> 
          {
          value>=1 
          ? "star" 
          : value>=0.5 
          ? "star_half" 
          : "star_outline"
          }
        </span>
      </span>
      <span>
        <span className="material-icons" style={{color}}> 
          {
          value>=2
          ? "star" 
          : value>=1.5 
          ? "star_half" 
          : "star_outline"
          }
        </span>
      </span>
      <span>
        <span className="material-icons" style={{color}}> 
          {
          value>=3
          ? "star" 
          : value>=2.5 
          ? "star_half" 
          : "star_outline"
          }
        </span>
      </span>
      <span>
        <span className="material-icons" style={{color}}> 
          {
          value>=4
          ? "star" 
          : value>=3.5 
          ? "star_half" 
          : "star_outline"
          }
        </span>
      </span>
      <span>
        <span className="material-icons" style={{color}}>
          {
          value>=5
          ? "star" 
          : value>=4.5 
          ? "star_half" 
          : "star_outline"
          }
          </span>
      </span>
      <span>{text && text}</span>
      
    </div>
  )
}

Rating.defaultProps = {
  color: "#b3b300"
}

// Rating.propTypes={
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string
// }

export default Rating
