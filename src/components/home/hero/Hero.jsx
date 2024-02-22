import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading  title='Mbeu Impact Farming' subtitle='Invest In Sustanaible Zimbabwean Farms' />

          <form className='flex'>
            <div className='box'>
              <span className=''>City/Town</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Crop Type</span>
              <input type='text' placeholder='Crop Type' />
            </div>
            <div className='box'>
              <span>Budget Range</span>
              <input type='text' placeholder='Budget Range' />
            </div>
            <div className='box'>
              <h4>Search</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
