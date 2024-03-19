import React from "react";
import RecordsContext from "./recordsContext";

const RecordsContextProvider = ({ children }) => {
  const [records, setRecords] = React.useState([]);
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = React.useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
   
  return (
    <RecordsContext.Provider value={{ records, setRecords, user, setUser, registerUser, setRegisterUser }}>
      {children}
    </RecordsContext.Provider>
  );
};

export default RecordsContextProvider;