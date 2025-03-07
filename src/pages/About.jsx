// src/pages/About.jsx
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">About Stodeer</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <img 
            src="/images/about/workshop.jpg" 
            alt="Stodeer Workshop" 
            className="w-full h-auto rounded-lg mb-4"
          />
        </div>
        
        <div className="space-y-6 text-gray-700">
          <p>
            Founded in 2015, Stodeer is a premium design studio specializing in artistic mechanical metal sculptures and functional art pieces. Our mission is to blend traditional craftsmanship with innovative design, creating unique pieces that serve as both functional objects and artistic statements.
          </p>
          
          <p>
            Each Stodeer creation is meticulously handcrafted by our team of skilled artisans who bring years of experience in metalworking, mechanical engineering, and artistic design. We pride ourselves on attention to detail, using only the highest quality materials to ensure that every piece is not only beautiful but built to last.
          </p>
          
          <p>
            Our workshop is located in Changshu, Jiangsu, China, where we draw inspiration from both Eastern and Western artistic traditions. We maintain a commitment to sustainable practices, minimizing waste and ensuring that our production processes are environmentally responsible.
          </p>
          
          <p>
            At Stodeer, we believe that everyday objects can be transformed into extraordinary works of art. Whether it's our signature nautilus and anglerfish models or our innovative lighting solutions, each piece is designed to inspire wonder and appreciation for the marriage of form and function.
          </p>
          
          <p>
            We invite you to explore our collection and discover the perfect Stodeer piece to add character and artistic value to your space.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="bg-black text-white px-6 py-3 inline-block hover:bg-gray-800">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;