import './styles.css'

export default function Home() {
  return (
    <main>
      <h1>My Watch Collection</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/vintage">Vintage</a> | <a href="/modern">Modern</a> 
      </nav>
      <p>Welcome to my watch Collection.</p>
      <img src="/images/Spinnaker.jpg" alt="Spinnaker Bradner Pacific on Beads of Rice band" />
      <img src="/images/Hamilton.jpg" alt="Vintage Hamilton DateLine model A-585 on a generic balck leather band" />
      <img src="/images/NamokiBuild.jpg" alt="My Namoki build on a generic balck leather band" />
      <img src="/images/Lebem.jpg" alt="My vintage gold plated Lebem watch on a brown saffino band from strapsco" />
    </main>
  );
}
