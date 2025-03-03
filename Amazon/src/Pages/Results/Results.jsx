import LayOut from "../../Components/LayOut/LayOut.jsx";
import Classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint.js";
import { useState, useEffect } from "react";
import ProductCard from "../../Components/Products/ProductCard.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Added state
    const { categoryName } = useParams();

    useEffect(() => {
        setIsLoading(true); // Set loading to true before fetching
        axios.get(`${productUrl}/category/${categoryName}`)
            .then((res) => {
                setResults(res.data);
                setIsLoading(false); // Stop loading after success
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false); // Stop loading even if there's an error
            });
    }, [categoryName]);

    return (
        <LayOut>
            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
                <hr />
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className={Classes.products_container}>
                        {results?.map((product) => (
                            <ProductCard 
                            key={product.id}
                            renderDesc={false} 
                            renderAdd={true}
                            product={product} />
                        ))}
                    </div>
                )}
            </section>
        </LayOut>
    );
}

export default Results;
