import '@styles/globals.css';
import Nav from '@Components/nav'
import Footer from '@Components/footer';
import Sponsors from '@Components/sponsors';

export const metadata = {
    tittle:"Sizzy Afro Dances",
    description: 'Embracing the Culture and Rythm',
    icon: '/favicon.ico', // Path to your favicon in the public directory
        // You can also add apple-touch-icon or other icon types here
    
}

const Rootlayout = ({children}) => {
    return(

        <html lang='en'>
            <body>             
                <main className = 'app'>
                    <Nav />
                    {children}
                </main>
                
            </body>
            <Footer/>
            <Sponsors/>

        </html>
    )
}
export default Rootlayout