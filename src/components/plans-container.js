import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import './plans-container.css'

const PlansContainer = (props) => {
  return (
    <div className="plans-container-plans-container">
      <main className="plans-container-plans">
        <div className="plans-container-plan">
          <div className="plans-container-details">
            <div className="plans-container-header">
              <label className="plans-container-name">{props.name}</label>
              <div className="plans-container-pricing"></div>
            </div>
          </div>
          <div className="plans-container-buy-details">
            <div className="plans-container-buy button">
              <span className="plans-container-text">
                <span>Kak delat sait?</span>
                <br></br>
              </span>
            </div>
            <div className="plans-container-features">
              <span className="plans-container-heading">{props.heading}</span>
              <div className="plans-container-list">
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
              </div>
            </div>
          </div>
        </div>
        <div className="plans-container-plan1">
          <div className="plans-container-details1">
            <div className="plans-container-header1">
              <label className="plans-container-name1">{props.name1}</label>
              <div className="plans-container-pricing1"></div>
            </div>
          </div>
          <div className="plans-container-buy-details1">
            <div className="plans-container-buy1 button">
              <span className="plans-container-text3">{props.text}</span>
            </div>
            <div className="plans-container-features1">
              <span className="plans-container-heading1">{props.heading1}</span>
              <div className="plans-container-list1">
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
              </div>
            </div>
          </div>
        </div>
        <div className="plans-container-plan2">
          <div className="plans-container-details2">
            <div className="plans-container-header2">
              <label className="plans-container-name2">{props.name2}</label>
              <div className="plans-container-pricing2"></div>
            </div>
          </div>
          <div className="plans-container-buy-details2">
            <div className="plans-container-buy2 button">
              <span className="plans-container-text4">
                <span>povonyaem?</span>
                <br></br>
              </span>
            </div>
            <div className="plans-container-features2">
              <span className="plans-container-heading2">{props.heading2}</span>
              <div className="plans-container-list2">
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
                <Includes rootClassName="includes-root-class-name"></Includes>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

PlansContainer.defaultProps = {
  name: 'Paru prostih voprosov',
  heading: 'You will get',
  name1: 'Chtoby pnyat kto ty',
  text: 'Kak tiho pukat?',
  heading1: 'You will get',
  name2: 'Ty gotov?',
  heading2: 'You will get',
}

PlansContainer.propTypes = {
  name: PropTypes.string,
  heading: PropTypes.string,
  name1: PropTypes.string,
  text: PropTypes.string,
  heading1: PropTypes.string,
  name2: PropTypes.string,
  heading2: PropTypes.string,
}

export default PlansContainer
