import '@styles/globals.css';
import Nav from '@Components/nav'
import Footer from '@Components/footer';
import Sponsors from '@Components/sponsors';

export const metadata = {
    title: "Sizzy Afro Dances",
    description: 'Embracing the Culture and Rhythm',
    icons: {
        icon: '/favicon.ico'
    }
}

const RootLayout = ({children}) => {
    return(

        <html lang='en'>
            <body>
                <Nav />
                <main className='app'>
                    {children}
                </main>
                <Footer />
                <Sponsors />
            </body>

        </html>
    )
}
export default RootLayout