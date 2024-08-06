import React, { useContext } from 'react'
import { CardContext } from '../../context/CardContext'
import Card from "../../components/Card"
const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(CardContext)
  if (wishlist.length === 0) {
    return <div className="flex justify-center items-center h-screen -mt-20 text-2xl text-neutral-600 font-semibold">No basket products</div>
  }
  return (
    <div className='mt-10'>
      <div className="text-4xl text-center">Basket</div>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-red-600 w-16 h-1"></div>
      </div>
    <div className='grid grid-cols-5 mx-10 mt-10'>
      
      {wishlist.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}

    </div>

    </div>
  )
}

export default Wishlist