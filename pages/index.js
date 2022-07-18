import Head from "next/head"
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import Avater from "../components/Avater"
import Footer from "../components/Footer"
import { useRouter } from "next/router";
import { useRef } from "react"

export default function Home(){

    const router = useRouter();
    const searchInputRef = useRef();

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <div className="min-h-screen">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="World effective search engine"/>
                <meta name="keywords" content="search, search-engine, google"/>
                <meta name="author" content="Ukhang Marma"/>
                <link rel="Shortcut icon" href="./images/favicon.ico" />
                <title>Scema</title>
            </Head>

            {/* ================== Header =================== */}
            <header className="flex w-full p-5 justify-end text-sm text-[#374151]">
                {/* ========= right =========== */}
                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* ====== icon ====== */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

                    {/* ====== avater ====== */}
                    <Avater url={"./images/profile.png"}/>
                </div>
            </header>

            <form className="flex flex-col items-center mt-44">
                <div className="flex space-x-4 items-center">
                    <h2 className="text-7xl font-semibold tracking-wide text-[#374151]">
                        <span className="text-[#FBBF24]">S</span>cema
                    </h2>
                    <img
                        src={"./images/logo.png"}
                        width={130}
                        height={120}
                    />
                </div>

                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-xl border-zinc-400 border px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <SearchIcon className="h-5 mr-3 text-gray-500"/>
                    <input 
                        type="text"
                        placeholder="Search here..."
                        className="focus:outline-none flex-grow bg-transparent"
                        ref={searchInputRef}
                    />
                    <MicrophoneIcon className="h-5 text-sky-700 rounded-full cursor-pointer hover:bg-gray-100 ml-1"/>
                </div>

                <div className="flex flex-col justify-center items-center mt-7">
                    <button className="btn" onClick={search}>
                        I'm Feeling Lucky
                    </button>

                    <p className="text-sm font-medium text-[#313947] mt-3">Trusted by tens of millions worldwide!</p>
                </div>
            </form>

            <div className="mt-44 flex flex-col items-center">
                <h2 className="text-center text-[#313947] text-4xl font-bold">
                    We don’t store your
                </h2>
                <h2 className="text-center text-[#313947] text-4xl font-bold">
                    personal information. Ever.
                </h2>
                <p className="text-center text-lg mt-4 text-[#374151]">
                    Our privacy policy is simple: we don’t collect 
                    </p>
                <p className="text-center text-lg text-[#374151]">
                    or share any of your personal information.
                </p>

                <img
                    src={"./images/delete.png"}
                    width={500}
                    height={500}
                    alt="delete-document-image"
                />
            </div>

            {/* ============ Footer ========== */}
            <Footer/>
        </div>
    )
}