import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const Header = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  const genRandomInt = max => {
    return Math.floor(Math.random() * (max + 1));
  };

  const description = reactDescriptions[genRandomInt(1)];
  return (
    <header>
      <img src={reactImg} alt="reactImg" />
      <h1>React</h1>
      <p>{description} React concepts you will need for almost any app you are going to build</p>
    </header>
  );
};

export default Header;
