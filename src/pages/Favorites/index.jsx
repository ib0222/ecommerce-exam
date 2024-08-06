import React, { useContext } from 'react'
import { CardContext } from '../../context/CardContext'
import Card from "../../components/Card"
const Favorites = () => {
  const { favorites, setFavorites } = useContext(CardContext)
  if (favorites.length === 0) {
    return <div className="flex justify-center items-center h-screen -mt-20 text-2xl text-neutral-600 font-semibold">No favorite products</div>
  }
  return (
    <div>
      {favorites.map((item,idx) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}

    </div>
  )
}

export default Favorites