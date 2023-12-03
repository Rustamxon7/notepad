import { IoIosAddCircleOutline } from "react-icons/io";

const Categories = ({ dispatch, data }) => {
  const handleAddNote = () => {
    const date = new Date();

    const formattedDate = `${date.getFullYear()} / ${
      date.getMonth() + 1
    } / ${date.getDate()}`;

    const newNote = {
      id: data[data.length - 1].id + 1,
      title: "Undefined",
      info: "",
      hashtags: [""],
      category: "",
      edited_at: 1 / 1 / 2022,
      created_at: formattedDate,
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
  };

  return (
    <div className="categories">
      <div className="add">
        <button type="button" onClick={handleAddNote}>
          <IoIosAddCircleOutline className="plus" />
          <h4>Add Items</h4>
        </button>
      </div>
    </div>
  );
};

export default Categories;
