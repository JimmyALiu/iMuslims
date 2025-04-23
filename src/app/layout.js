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
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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