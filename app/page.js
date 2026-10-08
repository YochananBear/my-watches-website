'use client';

import Image from 'next/image';
import './styles.css';

export default function Home() {
    const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <main>
      
      <h1>My Watch Collection</h1>
      <p>Welcome to my watch Collection.</p>
      <div className="image-grid">
        <Image src="/images/Spinnaker.jpg" alt="Spinnaker Bradner Pacific on Beads of Rice band" width={300} height={300} />
        <Image src="/images/Hamilton.jpg" alt="Vintage Hamilton DateLine model A-585 on a generic balck leather band" width={300} height={300} />
        <Image src="/images/NamokiBuild.jpg" alt="My Namoki build on a generic balck leather band" width={300} height={300} />
        <Image src="/images/Lebem.jpg" alt="My vintage gold plated Lebem watch on a brown saffino band from strapsco" width={300} height={300} />
      </div>
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
