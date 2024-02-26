
export default function layout ({ children }: { children:React.ReactNode}) {


    return (
        <main>
            <nav>navegación de las categorías</nav>
            { children }
        </main>
    )
}