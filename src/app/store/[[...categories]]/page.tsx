import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getProducts } from "app/services/shopify"


interface categoryProps {
    params: {
        categories: string[],
    }
        searchParams?: string

    
}

export default async function category(props: categoryProps) {

    const products = await getProducts()

    const { categories } = props.params

    
    return(
        <ProductsWrapper products={products}/>
    )
}