import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../Server";
import Response from "../Server";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

const Search = ({results}) => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="World effective search engine"/>
                <meta name="keywords" content="search, search-engine, google"/>
                <meta name="author" content="Ukhang Marma"/>
                <link rel="Shortcut icon" href="./images/favicon.ico" />
                <title>{router.query.term} - Scema Search</title>
            </Head>

            {/* ==============  Header =============== */}
            <Header/>


            {/* =============== Search results ============  */}
            <SearchResults results={results}/>
        </div>
    )
}

export default Search;
export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    // https://www.googleapis.com/customsearch/v1
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    // After the server side rendered... pass the result to the client
    return {
        props: {
            results: data,
        }
    }

}