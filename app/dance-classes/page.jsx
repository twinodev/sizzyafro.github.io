import Register from "@Components/Register"
export const metadata = {
    title: {
        absolute: "Sizzy Afro | Dance Classes"
    }
}
export default function Dance(){
    return(
        <div className="block md:flex">  
            <div className="w-full md:w-[50%]">
            <h1 className="text-center font-bold text-[min(6vw,40px)]">Dance classes</h1>
            <div className="border-1 text-center border-blue-700 shadow-black shadow-lg m-2 rounded-lg p-3">
                <h1 className="font-bold text-purple-600">Whats in Our class?</h1>
                <p>Amazing Choreographies, TikTok Dance Challenges<br/>
                Free Style Sessions, Open Battle Calls<br/>
                Just To Give a Little of it</p>
            </div>
             <div className="border-1 text-center border-blue-700 shadow-black shadow-lg m-2 rounded-lg p-3">
                <h1 className="font-bold text-purple-600">Why Choose Us?</h1>
                <p>We are Dedicated to Service, Emphasizing<br/>
                Step by Step Learning and also<br/>
                Individual Based Aproach to Ensure clarity</p>
            </div>
             <div className="border-1 text-center border-blue-700 shadow-black shadow-lg m-2 rounded-lg p-3">
                <h1 className="font-bold text-purple-600">Additives</h1>
                <p>We Host Different Musicians every class,<br/>
                Do them Choreographies and Dance Videos<br/>
                This is a link to the Industry</p>
            </div>
             <div className="border-1 text-center border-blue-700 shadow-black shadow-lg m-2 rounded-lg p-3">
                <h1 className="font-bold text-purple-600">Benefits</h1>
                <p>Improve your Style<br/>
                Learn New Moves and Ideas<br/>
                Get Exposed<br/>
                Connect with Successfull Dancers
                </p>
            </div>
            </div>
            <Register/>
        </div>
    )
}