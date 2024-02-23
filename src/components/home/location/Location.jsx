import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Rent A Farm' subtitle='Want To Farm Yourself. Browse Our List Of Verified Farmlands Available For Renting' />

          <div className='content grid3 mtop mb-2'>
            {location.map((item, index) => (
              <>
              <div className='box ' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
                <p className="pt-2">Name: <span className="font-bold">{item.name}</span></p>
                <p >Size: <span className="font-bold">{item.Villas}</span></p>
                <p >Rental Price: $<span className="font-bold">{item.Offices}</span></p>
              </div>
              
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
