import Image from "next/image"
import Link from "next/link"
export default function Event(){
    return(
        <div className="flex w-full md:w-[100%] h-60 md:w-100 justify-center m-auto mt-1 mb-2 hover:shadow-amber-700 shadow-xl bg-amber-200 rounded-xl">
            <Image className="block  rounded-xl w-auto p-2" src="/images/class.png" width={40} height={40} alt="Event Cover"/>
            <div className="m-2 grid bg-white w-100 rounded-xl  p-7 md:p-3">
                <h2 className="text-amber-700 font-bold">Pens Down Dance CLass</h2>
                <hr/>
                <p className="italic text-sm">Youth Center <br/>
                Lugazi, Mbarara</p>
                <p className="text-sm">06/12/2025</p>
                <Link href="/dance-classes">
                    <button className="bg-black text-white rounded-xl p-1 m-1 animate-pulse hover:bg-purple-600">R.S.V.P</button>
                </Link>
            </div>
            
        </div>
    )
}