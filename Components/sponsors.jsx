import Sponsor from "./sponsor"
export default function Sponsors(){
    return(
        <div className="text-center p-3 m-auto w-full  ">
          <div className="flex justify-center md:gap-10 gap-4 bg-white">
            <Sponsor logo="/icons/logo.png" name="Sizzy Afro"/>
            <Sponsor logo="/icons/musttv.jpg" name="Must TV"/>
            <Sponsor logo="/icons/RAHU-2.png" name="Reach A Hand"/>
            <Sponsor logo="/icons/rh.jpg" name="Reproductive Health"/>
            <Sponsor logo="/icons/av.png" name="Afro Visuals"/>
          </div>
        </div>
    )
}