import React from "react"
import Products from "./products"
import { useParams } from "react-router-dom"

function SingleProduct(){
    const { id } = useParams()
    return (
        <>
                <h1>SingleProduct {id}</h1>

                {/* <ProductPreview/> */}
        </>

    )

}

export default SingleProduct