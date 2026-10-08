export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav>
      <p>This is my homepage.</p>
    </main>
  );
}