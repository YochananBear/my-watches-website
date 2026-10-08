import Image from 'next/image';
import '../styles.css';
import './modern.css';

export default function Vintage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Vintage Watches</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/vintage">Vintage</a> | <a href="/modern">Modern</a> 
      </nav>
      <p>These are my modern watches.</p>
    </main>
  );
}