
import Link from "next/link"

export default function Service(){
    return(
        <div className="md:flex block w-auto justify-center m-2 md:m-auto">
            <div className="hover:shadow-amber-500 shadow-2xl block border-2 mr-7 rounded-xl bg-amber-50 mt-2 md:w-[30%] w-full p-3 text-center">

                <h2 className=" font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-300 mb-2">
                    DANCE CLASSES</h2>
                <p>I have built hundreds of Students From Ground to Expert Battle cuts.</p>
                <p>I just trust the process with Both physical and Online classes</p>
                <Link href="/">
                    <button className="bg-amber-500 rounded-[10px] pl-3 pr-3 font-bold text-white hover:cursor-pointer hover:animate-pulse hover:bg-amber-600">
                        ENROLL</button>
                </Link>
            </div>
            <div className=" hover:shadow-amber-500 shadow-2xl block border-2 mr-7 rounded-xl bg-amber-50 mt-5 md:w-[30%] w-full p-3 text-center">

                <h2 className=" font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-300 mb-2">
                    CHOREOGRAPY</h2>
                <p>Lets find the best way to move To your rythm</p>
                <p>Done Choreography for 20+ Music Videos with 2+ years Experience</p>
                <Link href="/">
                    <button className="bg-amber-500 rounded-[10px] pl-3 pr-3 font-bold text-white hover:cursor-pointer hover:animate-pulse hover:bg-amber-600">
                        BOOK</button>
                </Link>
            </div>
            <div className="hover:shadow-amber-500 shadow-2xl block border-2 mr-7 rounded-xl bg-amber-50 mt-5 md:w-[30%] w-full p-3 text-center">

                <h2 className=" font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-300 mb-2">
                    DANCE STYLES</h2>
                <p>Afro Dance | Breaking | Dance Hall | Popping</p>
                <p>Modern Standard and Cotempollary dance styles all in me</p>
                <Link href="/">
                    <button className="bg-amber-500 rounded-[10px] pl-3 pr-3 font-bold text-white hover:cursor-pointer hover:animate-pulse hover:bg-amber-600">
                        MORE</button>
                </Link>
            </div>
        </div>
    )
}