import layouts from "@Layouts/index"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.Page}>
             Home
    </div>
  )
}


Home.layout=layouts.DefaultLayout

export async function getStaticProps(context: any) {
  return { props: {  } }
}
export default Home
