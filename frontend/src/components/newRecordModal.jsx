import React from "react";
import Modal from "react-bootstrap/Modal";
import { baseUrl } from "../urls";

const NewRecordModal = ({ show, onHide }) => {
  const [newRecord, setNewRecord] = React.useState({
    fullName: "",
    status: "",
    date: "",
  });

  const handleNewRecord = (e) => {
    const { name, value } = e.target;
    setNewRecord({
      ...newRecord,
      [name]: value,
    });
  };

  const addRecord = async () => {
    const { fullName, status, date } = newRecord;
    if (!fullName || !status || !date) {
      return alert("Please fill in all the fields");
    }

    try {
      const response = await fetch(
        `${baseUrl}/api/v1/records/create-record`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(newRecord),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        if (data.error) {
          return alert("Failed to add record");
        }
      }
      alert("Record added Successfully");
      window.location.reload();
      onHide();
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Fetch Error fetch: " + error.message);
    }
  };
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Record
        </Modal.Title>
        <h1 className="text-2xl font-medium cursor-pointer" onClick={onHide}>
          X
        </h1>
      </Modal.Header>
      <Modal.Body>
        <section className="flex flex-col gap-2 items-center justify-center">
          <div className="flex items-center gap-3 mt-2">
            <label htmlFor="recipeName">Full Name</label>
            <input
              type="text"
              onChange={handleNewRecord}
              name="fullName"
              value={newRecord.fullName}
              placeholder="Enter full name"
              className="border py-2 px-4 text-center rounded-lg outline-none"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <label htmlFor="recordName">Status</label>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <label htmlFor="present">Present</label>
                <input
                  type="radio"
                  id="present"
                  name="status"
                  value="present"
                  onChange={handleNewRecord}
                />
              </div>
              <div className="flex gap-2 mt-1">
                <label htmlFor="absent">Absent</label>
                <input
                  type="radio"
                  id="absent"
                  name="status"
                  value="absent"
                  onChange={handleNewRecord}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <label htmlFor="recordName">Date</label>
            <input
              type="date"
              onChange={handleNewRecord}
              name="date"
              value={newRecord.date}
              placeholder="Enter Intructions"
              className="border px-8 py-2 rounded-lg outline-none"
            />
          </div>
          <button
            onClick={addRecord}
            className="bg-theme text-white p-3 mt-3 rounded-lg"
          >
            Add in Records
          </button>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default NewRecordModal;
