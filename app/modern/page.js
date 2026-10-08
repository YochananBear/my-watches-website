import Image from 'next/image';
import '../styles.css';

export default function Modern() {
  return (
    <main>
      <h1>Modern Watches</h1>
      <p>These are my modern watches.</p>
      <div className="image-grid">
        <Image src="/images/Spinnaker.jpg" alt="Spinnaker Bradner Pacific on Beads of Rice band" width={300} height={300} />
        <Image src="/images/NamokiBuild.jpg" alt="My Namoki build on a generic balck leather band" width={300} height={300} />
      </div>
    </main>
  );
}