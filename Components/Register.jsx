
import Sponsors from "./sponsors"
export default function Register(){
    return(
        <div className="bg-linear-to-r from-orange-500 to-yellow-400 justify-center w-full m-2">
            <h1 className="text-center text-[min(5vw,40px)] font-bold">Register</h1>
            <hr/>

            <form className="grid grid-cols-2 m-auto p-10 justify-center" method="POST" required="True" >
                <label>First Name:</label>
                <input  className="border-1 rounded-lg m-2 p-1"type="text" placeholder="First Name"/>
                <label>Second Name:</label>
                <input  className="border-1 p-1 rounded-lg m-2"type="text" placeholder="second Name"/>
                <label>Email:</label>
                <input  className="border-1 p-1 rounded-lg m-2"type="email" placeholder="user@example.com"/>
                <label>Phone Number:</label>
                <input  className="border-1 p-1 rounded-lg m-2"type="phone" placeholder="+256783542542"/>
                <label>Brief Location:</label>
                <input  className="border-1 p-1 rounded-lg m-2"type="text" placeholder="Kakoba, Mbarara"/>
                <label>Is it your First Time to Attend?</label>
                <input className="w-5" type="checkbox" value="Yes" placeholder="Yes"/>
                <p></p>
                <button className="bg-black text-white p-1.5 m-2  rounded-xl hover:text-black hover:bg-white">Register</button>
            </form>
            <Sponsors/>
        </div>
        
        
    )
}