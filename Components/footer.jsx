
import Social from "./social"
export default function Footer(){
    return(
        <footer className="text-center bg-gradient-to-r from-orange-500 to-purple-500 p-4 w-full text-white">
            <h3 className="mb-1">Follow Me On!</h3>
            <div className="flex justify-center md:gap-10 gap-4">
                <Social url="https://tiktok.com/@sizzyafro" source="/icons/tik.png" name="TikTok"/>
                <Social url="https://youtube.com/@sizzyafro" source="/icons/yt.png" name="Youtube"/>
                <Social url="https://instagram.com/@sizzyafro" source="/icons/ig.png" name="Instagram"/>
                <Social url="https://x.com/sizzyafro" source="/icons/x.png" name="X"/>
                <Social url="https://tiktok.com/@sizzyafro" source="/icons/fb.png" name="Facebook"/>
            </div>
            <p className="text-black">&copy; sizzy Afro X AfroDev 2026</p>
        </footer>
    )
}