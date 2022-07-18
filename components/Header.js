import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avater from "./Avater";
import HeaderOptions from "./HeaderOptions";

const Header = () => {

    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <div>
            <header className="sticky top-0 bg-white">
                <div className="flex w-full p-6 items-center">
                    <img
                        src="/./images/logo.png" 
                        height={45} 
                        width={50}
                        onClick={() => router.push("/")}
                        className="cursor-pointer shadow-xl"
                    />

                    <form className="flex flex-grow rounded-xl border-zinc-400 border shadow-md max-w-3xl items-center px-3 md:px-6 py-2 md:py-3 ml-10 mr-5">
                        <input 
                            type="text" 
                            ref={searchInputRef} 
                            className="flex-grow w-full focus:outline-none"
                        />
                        <XIcon 
                            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                            onClick={() => {searchInputRef.current.value = ""}}
                        />
                        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex border-gray-300 border-l-2 pl-4 text-sky-700 "/>
                        <SearchIcon className="h-6 text hidden sm:inline-flex text-gray-500"/>
                        <button hidden type="submit" onClick={search}>Search</button>
                    </form>
                    <Avater className="ml-auto" url="./images/profile.png"/>
                </div>

                <HeaderOptions/>
        </header>
        </div>
    )
}

export default Header;