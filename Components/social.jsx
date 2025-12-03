import Link from "@node_modules/next/link"
import Image from "@node_modules/next/image"
export default function Social(props){
    return(
        <div className="flex mb-1">
            <Link href={props.url}>
                 <Image className="mb-1" src={props.source} alt={props.name}  width={40} height={40}/>
             </Link> 
        </div>
    )
}