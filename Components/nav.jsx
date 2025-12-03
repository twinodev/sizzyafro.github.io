"use client";

import Link from "next/link"
import Image from "next/image"

function Nav(){
    return(
        <nav className=" flex flex-between p-5 bg-linear-to-r from-orange-500 to-blue-500 rounded-[15px] m-2">
            <Link href="/" className="flex md:gap-10 gap-1 flex-center">
                <Image src='/icons/logo.png' alt="logo" width={50} height={40} className="hover:animate-spin"/>
                <p className="m-auto font-bold hover:text-emerald-50">Sizzy Afro Dances</p>
            </Link>
            <h1 className="m-auto text-center text-[min(3vw,30px)] text-orange-800">Embracing The Power Of Movement</h1>
            <div className="ml-auto"  >  
                <Link href="https://www.paypal.com/ncp/payment/VY44H6DSDJKJ4" >
                  <button className="hover:bg-white bg-black rounded-lg p-2 hover:text-black text-white hover:animate-pulse duration-7">
                    Donate
                  </button>
                </Link>
            </div>

        </nav>
    )
}
export default Nav