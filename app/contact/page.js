import '../styles.css';
import './contact.css';

export default function Contact() {
  return (
    <main>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/vintage">Vintage</a> | <a href="/modern">Modern</a> 
      </nav>
      <h1>Contacts</h1>
      <p>Email me at notarealemail@fakemail.com<br />
      Call me at 1-800-668-7325<br />
      Or leave a comment below with your name and email and we'll respond as soon as possible!<br /> </p>

      <form action="/comment" method="post">
        <h2>Comment</h2>
        <div className="form-element">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required/>
        </div>
        <div className="form-element">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required/>
        </div>
        <div className="form-element">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="ploni@almoni.com" required/>
        </div>
        <div className="form-element">
            <label htmlFor="order">Enter your comment here:</label>
            <textarea id="order" name="order" rows="5" cols="35"></textarea>
        </div>
        <div className="form-element">
            <input type="submit" value="submit"/>
        </div>
      </form>
    </main>
  );
}