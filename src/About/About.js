import prof from './prof.jpg';
import './About.css';
const About = () => {
  return (
    <div>
      <div className="header-container">
        <h3 className="main-header">About me</h3>
      </div>
      <div className="about">
        <img
          alt="Me"
          style={{ width: '10rem', borderRadius: '0.2rem' }}
          src={prof}
        />
        <p className="about-main-p">
          A wonderful serenity has taken to the possession of my entire soul
          network infrastructure, including consolidation of established network
          designed and created infrastructure. Voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora.
        </p>
      </div>
    </div>
  );
};

export default About;
