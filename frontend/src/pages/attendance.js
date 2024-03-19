import RecordsContext from '../context/recordsContext';
import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header';
import DataTable from "../components/table";
import NewRecordModal from '../components/newRecordModal';
import axios from 'axios';
import { baseUrl } from '../urls';

const Attendance = () => {

    const { records, setRecords } = useContext(RecordsContext);

    const [newRecordModalShow, setNewRecordModalShow] = useState(false);
    const [search, setSearch] = useState("");

    const filteredRecords = records.filter(record =>
        record.fullName.toLowerCase().includes(search.toLowerCase())
    );

    const handleNewRecordClick = () => {
        setNewRecordModalShow(true);
    }

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/records/get-records`)
            .then((response) => {
                setRecords(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setRecords]);

    return (
        <div style={{ height: "100vh" }} className='bg-page-theme'>
            <Header />
            <div className='mt-20'>
                <h1 className='text-center font-bold text-4xl'>
                    WELCOME {localStorage.getItem("username") && localStorage.getItem("username").toUpperCase()}
                </h1>
            </div>
            <div className='flex justify-center'>
                <button onClick={handleNewRecordClick} className='bg-theme text-white p-2 mt-3 rounded-lg'>Add a new record</button>
            </div>
            <div className='flex justify-center'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type='search' className='border outline-none w-1/2 mx-auto mt-3 p-3 rounded-lg' placeholder='Search in records...' />
            </div>
            <div className='flex justify-center mt-3'>
                <DataTable records={filteredRecords} />
            </div>
            <NewRecordModal show={newRecordModalShow} onHide={() => setNewRecordModalShow(false)} />
        </div>
    )
}

export default Attendance