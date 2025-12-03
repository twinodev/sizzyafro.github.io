import Link from "@node_modules/next/link"
export default function Social(props){
    return(
        <div className="flex mb-3">
            <Link href={props.url}>
                 <img className="mb-1" src="/Public/icons/logo.png" alt={props.name}  width={30} height={30}/>
                 <p className="text-sm">@sizzyafro</p>
             </Link> 
        </div>
    )
}