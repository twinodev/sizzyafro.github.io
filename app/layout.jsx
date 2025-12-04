import '@styles/globals.css';
import Nav from '@Components/nav'
import Footer from '@Components/footer';


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
            <head>
                <meta name="google-adsense-account" content="ca-pub-5861878697571557"/>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5861878697571557"
                 crossorigin="anonymous"></script>
            </head>
            <body>
                <Nav />
                <main className='app'>
                    {children}
                </main>
                <Footer />
            </body>

        </html>
    )
}
export default RootLayout
