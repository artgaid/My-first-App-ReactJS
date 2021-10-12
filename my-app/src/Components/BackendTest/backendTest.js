import { useEffect, useState } from "react";

const BackendTest = () => {
  const [value, setValue] = useState("");
  const [dataTest, setDataTest] = useState(null);

  const newItem = {
    name: value,
    id: dataTest?.length || 0,
  };

  useEffect(() => {
    fetch("http://localhost:3001/test")
      .then((response) => response.json())
      .then((data) => setDataTest(data));
  }, []);

  const deleteHandler = (id) => {
    fetch(`http://localhost:3001/test?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((delData) => setDataTest(delData));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((newData) => setDataTest(newData));
    setValue("");
  };

  return (
    <>
      {dataTest && (
        <ul>
          {dataTest.map((el) => (
            <li key={el.id}>
              <p> {el.name} </p>
              <button onClick={() => deleteHandler(el.id)}>delete</button>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </>
  );
};

//CRUD

// Create - merhod POST
// Read - method GET
// Update - method patch/put
// Delete - method delete

export default BackendTest;
