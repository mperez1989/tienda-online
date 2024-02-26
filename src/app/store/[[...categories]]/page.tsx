import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


interface categoryProps {
    params: {
        categories: string[],
    }
        searchParams?: string

    
}

export default async function category(props: categoryProps) {

    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    

    if(categories?.length > 0) {
        const selectedCollectionId = collections.find((collection:any) => collection.handle === categories[0]).id
        products = await getCollectionProducts(selectedCollectionId)

    } else {
        products = await getProducts()
    }
    console.log('products', products)

    
    return(
        <ProductsWrapper products={products}/>
    )
}