import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'iMuslims',
    description: 'Website created with Nextjs and React'
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/circle-logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Gotu&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div id="root">
                    <Header/>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>)
  }