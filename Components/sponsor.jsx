import Image from "@node_modules/next/image"
import Link from "@node_modules/next/link"
export default function Sponsor(props){
    return(
        <Link  className="" href="/">
            <Image className="rounded-full animate-pulse m-2  hover:animate-bounce" src={props.logo} height={40} width={40} alt={props.name}/>
        </Link>

    )
}