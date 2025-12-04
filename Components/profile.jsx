import Image from "next/image"
export default function Profile(){
    return(
        <div className="rounded-xl  w-full m-0 md:h-100
                         flex-col p-1">
            <Image className=" bg-gradient-to-r from-purple-500 to-blue-500 m-auto  p-0 rounded-full border-2  border-blue-500 " src="/images/me.png" width={200} height={100} alt="Twinomujuni CEO"/>
            <div className="rounded-xl bg-white shadow-blue-500 shadow-lg text-center md:mt-1 m-auto md:p-4">
                <h2 className="font-bold text-[25px] ">Twinomujuni Emmanuel</h2>
                <p className="text-center font-bold">(CEO)</p>
                <p>Here is your One Dancer, Choreographer, Coach and Dance class host in Mbarara, Uganda</p>
                <p className="italic text-sm">Populary Known Sizzy Afro</p>
            </div>


        </div>
    )
}