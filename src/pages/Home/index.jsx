import React from 'react'
import Hero from '../../components/Sections/Hero'
import Banner from '../../components/Sections/Banner'
import NewArrivals from '../../components/Sections/NewArrivals'
import DealOfTheWeek from '../../components/Sections/DealOfTheWeek'
import BestSellers from '../../components/Sections/BestSellers'
import LatestBlogs from '../../components/Sections/LatestBlogs'
function Home() {
  return (
    <div>
      <Hero/>
      <Banner/>
      <NewArrivals/>
      <DealOfTheWeek/>
      <BestSellers/>
      <LatestBlogs/>

    </div>
  )
}

export default Home