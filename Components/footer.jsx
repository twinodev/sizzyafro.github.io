
import Social from "./social"
export default function Footer(){
    return(
        <footer className="text-center bg-black p-4 w-full text-white">
            <h3 className="mb-2">Follow Us!</h3>
            <div className="flex justify-center sm:gap-4 gap-6">
                <Social url="https://tiktok.com/@sizzyafro" name="TikTok"/>
                <Social url="https://tiktok.com/@sizzyafro" name="YouTube"/>
                <Social url="https://tiktok.com/@sizzyafro" name="X"/>
                <Social url="https://tiktok.com/@sizzyafro" name="Facebook"/>
            </div>
            <p>Sizzy Afro Dances</p>
            <p>©️ AfroDev 2026</p>
        </footer>
    )
}