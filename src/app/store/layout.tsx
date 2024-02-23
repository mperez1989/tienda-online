
export default function layout ({ children }: { children:React.ReactNode}) {


    return (
        <main>
            <nav>navegación de las categorias</nav>
            { children }
        </main>
    )
}