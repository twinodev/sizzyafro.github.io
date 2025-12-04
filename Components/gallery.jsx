import Image from "next/image"
export default function Gallery(){
    return(
        <div className=""> 
            <Image className="block  rounded-xl w-auto md:pt-10" src="/images/class.png" width={40} height={40} alt="Event Cover"/>
            
        </div>
    )
}