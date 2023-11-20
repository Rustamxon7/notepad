import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { PiPenLight } from 'react-icons/pi';

const Welcome = ({openDashboard}) => {
  return (
    <div className='welcome'>
      <div className='title'>
        <h1>Welcome to Notepad Web</h1>
        <button className='open' onClick={openDashboard}>
          <PiPenLight className='icon' />
          <h3>New Note</h3>
        </button>
      </div>

      <footer>
        <div className='footer'>
          <p>developed by</p>
          <h4>Natanael Oliviera Martins</h4>
        </div>

        <div className='social-icons'>
          <AiOutlineInstagram className='icons-social' />
          <AiFillGithub className='icons-social' />
          <AiFillLinkedin className='icons-social' />
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
