import React from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <Link to={'/project/' + val.id}>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "Verified" ? "#25b579" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#f4f2f0" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                
                <span className="font-bold">Crop: <span className="font-light">{type}</span></span>
              
                <div>
                <label htmlFor=''>from /</label> <button className='btn2'>{price}</button> 
                </div>
              </div>
            </div>
            </Link>
          )
        })}
      </div>
      
    </>
  )
}

export default RecentCard
