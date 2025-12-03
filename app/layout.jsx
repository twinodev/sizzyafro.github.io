import '@styles/globals.css';
import Nav from '@Components/nav'
import Footer from '@Components/footer';

export const metadata = {
    tittle:"Sizzy Afro Dances",
    description: 'Embracing the Culture and Rythm',
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

        </html>
    )
}
export default Rootlayout