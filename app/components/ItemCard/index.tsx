import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import OrderModal from "../OrderModal";

interface ItemCardProps {
  item: typeof useLoaderData<'item'>
}

const ItemCard = (props: ItemCardProps) => {
  const { item, item: { name, imageUrl } } = props
  
  const [showModal, setState] = useState(false)
  return ( 
    <>
      <div className="group rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={imageUrl} alt="" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
        </div>

        <div className="p-6 mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
          <button className="inline-block" onClick={ ()=> setState(true) }>
            <span className="text-info dark:text-blue-300">Select This Design</span>
          </button>
        </div>
      </div>

      {/* Place Order Modal */}
      {showModal && <OrderModal item={item} setState={setState} />}
    </>
   )
}
 
export default ItemCard;