import React, { useEffect, useState } from 'react'
import axios from "axios";

const ComA = () => {
    const [num, setNum] =useState();
    const [name, setName]= useState();
    const [moves, setMoves] = useState();


    useEffect( () =>{
        // alert('hello');
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    console.log(res.data.name);

    setName(res.data.name);
    setMoves(res.data.moves.length);
        };
    getData();
    });
  return (
    <div>
        <h1 style={{ textAlign: "center", color: "red"}}> You Choose {num} value </h1>
        <h1 >My Name is <span style={{ textAlign: "center", color: "red"}}> {name}</span> </h1>
        <h1 style={{ textAlign: "center", color: "red"}}>I have {moves} moves</h1>

        <select style={{paddingLeft: "20px",  margin: "20px",  color: "red" }} value={num} onChange={(event) =>{
         setNum(event.target.value);
        }}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="44"> 44 </option>
            <option value="5"> 5 </option>
            <option value="5"> 5 </option>
            <option value="15"> 15 </option>
            <option value="51"> 51 </option>
            <option value="52"> 52 </option>
            <option value="54"> 54 </option>
            <option value="55"> 55 </option>
            <option value="58"> 58 </option>
            <option value="59"> 59 </option>
            <option value="50"> 50 </option>

       
        </select>

    </div>
  )
}

export default ComA