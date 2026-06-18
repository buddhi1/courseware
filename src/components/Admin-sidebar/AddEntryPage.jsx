

import { Paper, TextField, Container, Button, MenuItem } from "@material-ui/core";
import { useState } from "react";
import {AddEntryTypesArray} from "../../common/types";
import {postJSONData} from "../../common/util";

export default function AddEntry(props) {

  const [entryType, setEntryType] = useState("");
  const [entryText, setEntryText] = useState("");

  const handleTextChange = (event) => {
    setEntryText(event.target.value);

  }
  const handleTypeChange = (event) => {
    setEntryType(event.target.value);
    // console.log("Selected entry type:", event.target.value);

  }


  // console.log("This is the api url",props.api_url);

  const handleSubmit = async () =>{
    
      if(!entryType){
        return alert("Please select an entry type.");
      }
      else if(!entryText || entryText.trim() === ""){
        return alert("Entry title cannot be empty.");
      } 

    try{

      
      const payload = {
        "data": [
          {
            "type": entryType,
            "title": entryText 
          }
        ]
      };
      
      // const response = await fetch(`http://localhost:5000/add_Entry`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": "bearer " + localStorage.getItem("access_token")
      //   },
      //   body: JSON.stringify(payload)
      // });

      //  const resp = await response.json();



      // const token = localStorage.getItem("access_token");

      const auth = {
        "Authorization": "bearer " + localStorage.getItem("access_token")
      };

      const resp = await postJSONData(
        "http://localhost:5000/add_Entry",
        payload,
        auth
      );

      if(resp.status === "ok"){
        setEntryText("");
        setEntryType("");
        alert("Entry created successfully!");
      }else if(resp.status === "partial_success"){
        alert("Entry created with partial success." + "Accepted & Rejected: " + resp.details);
      }else if(resp.status === "error"){
        alert("Failed to create entry: " + resp.reason);
      }

    }catch(error){
      console.error("Error creating entry:", error);
      alert("An error occurred while creating the entry");
    }

  };


  return (

    <Container maxWidth="md" className="add-entry-wrapper">

      <Paper className="add-entry-paper">

        <TextField
          label="Entry Type"
           margin="normal"
           select
           className="entry-input"
           value={entryType}
           onChange={handleTypeChange}
        >
          {AddEntryTypesArray.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Entry Title"
           margin="normal"
           className="entry-input"
           value={entryText}
           onChange={handleTextChange}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}> Submit </Button>

       </Paper>

    </Container>

  );
}

