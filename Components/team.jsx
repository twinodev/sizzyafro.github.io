import Image from "@node_modules/next/image"
import Social from "./social"
export default function Team(){
    return(
        <div className="border-2 md:w-90 w-auto mr-10 md:h-100
team_container md:flex-col flex">
            <div className="w-50 h-50 border-2 rounded-[100px] md:m-auto mr-10 m-5">
                <Image src="/Public/icons" alt="Member pic" width={50} height={50} />
            </div>
            <div className="m-auto">
                <h3 className="mt-4 text-[20px] font-bold">First Last</h3>
                <p>Duty or Role</p>
                <div className="flex justify-center sm:gap-4 gap-6 mt-3">
                    <Social url="https://tiktok.com/@sizzyafro" name=""/>
                    <Social url="https://tiktok.com/@sizzyafro" name=""/>

                </div>

            </div>


        </div>
    )
}