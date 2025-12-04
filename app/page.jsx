import Profile from "@Components/profile";
import Service from "@Components/services";
import Event from "@Components/events";
import Sponsors from "@Components/sponsors";
import Gallery from "@Components/gallery";
export const metadata = {
    title: {
        absolute: "Sizzy Afro Dances"
    }
}

const Index = () => {
    return (
        <section className = "w-full flex-col">
            <Profile/>
            <Sponsors/>
            <Service/>
            <div className="block md:flex">
                <div className="gap-5 justify-center md:flex-col  p-2 text-center bg-linear-to-r from-orange-200 to-yellow-400 m-2 md:w-full"> 
                    <h1 className=" m-2 font-bold text-center text-xl mt-5 mb-2 bg-black text-white">Events</h1>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </div>
                <div className="gap-5 p-2 text-center  m-2 md:w-full"> 
                    <h1 className=" m-2 font-bold text-center text-xl mt-5 mb-2 bg-black text-white">Featured</h1>
                    <Gallery/>
                </div>
            </div>
            
        </section>
    )
}

export default Index;