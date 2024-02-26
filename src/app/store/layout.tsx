import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './storeLayout.module.css'


export default async function layout ({ children }: { children:React.ReactNode}) {

    const collections = await getCollections()


    return (
        <main className={styles.storeLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.storeLayout__list}>
                    {
                        collections.map((collection:any) => (
                            <Link key={collection.id} href={'/store/' + collection.handle} className={styles.storeLayout__chip}>
                                {
                                    collection.title
                                }
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            { children }
        </main>
    )
}