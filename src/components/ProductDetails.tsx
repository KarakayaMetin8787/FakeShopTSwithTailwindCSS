import "./ProductDetails.css"

interface Props {
    sourceItem: Item,
    visibility: string,
    setVisibility: (newValue: string) => void
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

const ProductDetails: React.FC<Props> = ({ sourceItem, visibility, setVisibility }) => {

    const handleClassChange = () => {
        setVisibility("hidden")
    }

    return ( 
        <div onClick={handleClassChange} className={`${visibility} w-[100vw] h-[100vh] fixed top-0 left-0 backdrop-filter backdrop-blur-sm`} >
            <div className="p-6 fixed bg-white w-3/4 h-3/4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] animate-appear">
                <div className="cursor-pointer" onClick={handleClassChange}>X</div>
                <img src={sourceItem.image} className="h-[200px] mx-auto my-0" alt="productImage" />
                <p>{sourceItem.title}</p>        
                {/* <p>{sourceItem.category}</p> */}
                <p>{sourceItem.description}</p>
                <p>{sourceItem.price}</p>
                <div className="flex flex-row gap-3">
                    <p>{sourceItem.rating.rate}</p>
                    <p>{sourceItem.rating.count}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;