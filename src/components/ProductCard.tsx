import { useState } from "react";
import ProductDetails from "./ProductDetails";

interface Props {
    item: Item,
    divKey: number
}

interface Item {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

const ProductCard: React.FC<Props> = ({ item, divKey }) => {

    const [changeClass, setChangeClass] = useState("hidden")

    const updateVisibilityState = (newValue: string) => {
        setChangeClass(newValue)
    }

    return ( 
        <div>
            <div onClick={() => setChangeClass("")} key={divKey} className="p-6 flex flex-col hover:scale-110 hover:shadow-xl transition-all">
                <img src={item.image} className="h-[200px] mx-auto my-0" alt="productImage" />
                <p>{item.title}</p>        
                {/* <p>{item.category}</p> */}
                {/* <p>{item.description}</p> */}
                <p>{item.price}</p>
                <div className="flex flex-row gap-3">
                    <p>{item.rating.rate}</p>
                    <p>{item.rating.count}</p>
                </div>
            </div>
            <ProductDetails sourceItem={item} visibility={changeClass} setVisibility={updateVisibilityState}/>
        </div>
    );
}

export default ProductCard;