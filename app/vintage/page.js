import Image from 'next/image';
import '../styles.css';
import './vintage.css';

export default function Vintage() {
  return (
    <main>
      <h1>Vintage Watches</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/vintage">Vintage</a> | <a href="/modern">Modern</a> 
      </nav>
      <p>These are my vintage watches.</p>
      <div className="image-grid">
        <Image src="/images/Hamilton.jpg" alt="Vintage Hamilton DateLine model A-585 on a generic balck leather band" width={300} height={300} />
        <Image src="/images/Lebem.jpg" alt="My vintage gold plated Lebem watch on a brown saffino band from strapsco" width={300} height={300} />
      </div>
    </main>
  );
}