import { FaFilter } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-title">
        <FaFilter />
        <p>Filtro</p>
      </div>
      <div className="filter-hashtags">
        <button className="include">#Node.js</button>
        <button className="include">#Laravel</button>
        <button className="include-color">#HTML</button>
        <button className="include-color">PostgreSQL</button>
        <button className="include">#CSS</button>
      </div>

      <div className="notes">
        <div className="note">
          <div className="note-text">
            <h1>Docker Images</h1>
            <p>
              Lorem Ipsum é simplesmente uma Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quo aliquid ab at voluptates? Quae, veritatis?
              simulação de texto da indústria tipográfica e de impressos, e vem
              ...
            </p>
          </div>
          <div className="more-info">
            <button>
              <MdMoreVert />
            </button>
          </div>
        </div>
        <div className="note">
          <div className="note-text">
            <h1>Docker Images</h1>
            <p>
              Lorem Ipsum é simplesmente uma Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quo aliquid ab at voluptates? Quae, veritatis?
              simulação de texto da indústria tipográfica e de impressos, e vem
              ...
            </p>
          </div>
          <div className="more-info">
            <button>
              <MdMoreVert />
            </button>
          </div>
        </div>
      </div>

      <div className="more-btns">
        <button className="more-btn">
          <FaPenToSquare className="update" /> update
        </button>
        <button className="more-btn">
          <FaEraser className="delete" /> delete
        </button>
      </div>
    </div>
  );
};

export default Filter;
