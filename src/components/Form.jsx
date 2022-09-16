import React, { useState } from "react";

function Form() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [visitors, setVisitors] = useState([
    {
      id: 1,
      lastname: "Ike",
      firstname: "Belida",
      purpose: "Payment",
      date: "10-20-31",
    },
    {
      id: 2,
      lastname: "Ken",
      firstname: "Bordado",
      purpose: "Payment",
      date: "09-20-23",
    },
    {
      id: 3,
      lastname: "Nina",
      firstname: "Peligro",
      purpose: "Payment",
      date: "10-02-10",
    },
  ]);

  const addVisitor = () => {
    const newPeople = {
      lastname: lastname,
      firstname: firstname,
      purpose: purpose,
      date: date,
    };

    setVisitors((prev) => [...prev, newPeople]);
    console.log(visitors);
  };

  return (
    <div className="container m-4 p-2 d-flex justify-content-between">
      <div className="form">
        <h1>Visitor Entry</h1>
        <label htmlFor="lastname">Lastname</label>
        <br />
        <input
          type="text"
          name="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="firstname">Firstname</label>
        <br />
        <input
          type="text"
          name="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="purpose">Purpose</label>
        <br />
        <input
          type="text"
          name="purpose"
          onChange={(e) => {
            setPurpose(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="date">Date</label>
        <br />
        <input
          type="date"
          name="purpose"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <button
          onClick={addVisitor}
          className="btn btn-success btn-sm mt-3 w-100"
        >
          Submit
        </button>
      </div>
      <div className="table ml-5 w-75">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Purpose</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => {
              return (
                <tr>
                  <td key={visitor.id}>{visitor.lastname}</td>
                  <td key={visitor.id}>{visitor.firstname}</td>
                  <td key={visitor.id}>{visitor.purpose}</td>
                  <td key={visitor.id}>{visitor.date}</td>
                  <button
                    className="btn btn-sm bg-danger m-1 w-100 text-white"
                    onClick={(id) => {
                      const newVisitor = visitors.filter(
                        (visitor) => visitor.id != id
                      );
                      console.log(newVisitor);
                    }}
                  >
                    delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
