import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

interface Product {
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

const Home = () => {

    const [fetchedData, setFetchedData] = useState<Product[]>([])
    const [preventFetch, setPreventFetch] = useState<String>("")

    useEffect(() => {
        if (preventFetch !== "done") {
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setFetchedData(json));
            setPreventFetch("done")
        }
    },[])
console.log(fetchedData);

    return ( 
        <div className="grid gap-5 grid-cols-5">
            {fetchedData?.map((item) => {
                return <ProductCard item={item} divKey={item.id}/>
            })}
        </div>
    );
}

export default Home;