import { useEffect, useState } from "react";

export const Groceries = () =>{
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)} />
            <button onClick={()=>{
                fetch("http://localhost:3001/groceries",{
                    method: "POST",
                    body: JSON.stringify({title: text, purchased:false}),
                    headers:{
                        "content-type": "application/json"
                    }
                })
             }}>Save Grocery</button>

        </div>

    )
}