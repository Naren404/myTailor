import { ItemModel } from "~/models/item.server";

interface ItemCardProps {
  item: ItemModel
}

const ItemCard = (props: ItemCardProps) => {
  const { item: { name, imageUrl } } = props
  console.log('imageUrl',imageUrl);
  
  return ( 
    <div className="overflow-hidden bg-white rounded-lg ">
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {name}
          </h3>
        </div>
    </div>
   )
}
 
export default ItemCard;