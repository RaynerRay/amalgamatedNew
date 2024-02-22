import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Upcoming Farming Projects' subtitle='Browse a List of Verified Farming Projects, Managed by Some of the Best Farmers in Zimbabwe.' />
          <RecentCard />
          
        </div>
      </section>
    </>
  )
}

export default Recent
