"use client";

import Link from "next/link"
import Image from "next/image"

function Nav(){
    return(
        <nav className=" flex flex-between p-3 ">
            <Link href="/" className="flex gap-3 flex-center">
                <Image src='/icons/logo.png' alt="logo" width={30} height={30}/>
                <p>Sizzy Afro</p>
            </Link>
            <div className="ml-auto"  >    
                <button className="hover:bg-white bg-black rounded-lg p-2 hover:text-black-500 text-green-500s">
                    Join Us
                </button>
            </div>

        </nav>
    )
}
export default Nav