import './styles.css';

export const metadata = {
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({children}) {
  return(
    <html>
      <body>
        <header>
          <h1>My Watches Website</h1>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/vintage">Vintage</a> | <a href="/modern">Modern</a> 
          </nav>
        </header>
        {children}
        <footer>
          <p>Created by Yochanan Friedman, 2026. No license</p>
        </footer>
      </body>
    </html>
  );
        
}