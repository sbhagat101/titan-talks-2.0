import './logo.svg';
import Nav from './Nav';


function Home() {
  return (
    <section className= "Main2">
    <Nav />
    <div>
        <h1 className = "title">Titan Talks welcomes you to connect with other titans</h1>
        <img src= "/images/titans.jpg" alt="" class= "center" />
    </div>
    </section>
    
  );
}

export default Home;