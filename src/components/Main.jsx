import { AiFillFolder } from 'react-icons/ai';
import { TbClockHour5 } from 'react-icons/tb';

const Main = () => {
  return (
    <div className='dashboard'>
      <div className='main'>
        <div className='main-title'>
          <h1>Hello World</h1>
          <div className='folder'>
            <p>
              <AiFillFolder className='time' /> Coding
            </p>
            <p>
              <TbClockHour5 className='time' />
              Editado a 21min
            </p>
          </div>
        </div>
        <hr />
        <div className='dashboard-edit'>
          <div className='dashboard-hashtags'>
            <p>#Laravel</p>
            <p>#PHP</p>
            <p>#PostgreSQL</p>
          </div>
          <p className='lorem'>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
