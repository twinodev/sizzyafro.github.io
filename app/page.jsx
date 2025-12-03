import Profile from "@Components/profile";
import Service from "@Components/services";
import Event from "@Components/events";
import Sponsors from "@Components/sponsors";
export const metadata = {
title: {
        absolute: "Sizzy Afro Dances"
    }
}

const Index = () => {
    return (
        <section className = "w-full  md:flex flex-col flex">
            <Profile/>
            <Sponsors/>
            <Service/>
            <h1 className=" m-2 font-bold text-center text-xl mt-5 mb-2 bg-black text-white">Events</h1>
            <div className="justify-center p-2 text-center bg-linear-to-r from-orange-200 to-yellow-400 m-2 md:flex"> 
               <Event/>
               <Event/>
               <Event/>
               <Event/>
            </div>
            
        </section>
    )
}

export default Index;