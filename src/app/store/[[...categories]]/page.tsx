interface categoryProps {
    params: {
        categories: string[],
    }
        searchParams?: string

    
}

export default function category(props: categoryProps) {

    const { categories } = props.params

    
    return(
        <h1>Categoria dinamíca: { categories }</h1>
    )
}