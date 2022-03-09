import { useEffect } from "react"

export const Todos = ()=>{
    const [counter1, setCounter1] = useState(0);

    const [counter2, setCounter2] = useState(0);

    console.log("Before effect");

    useEffect(() => {
        console.log("inside effect 1");
    }, []);

    useEffect(() => {
        console.log("inside effect 2");
    });

    console.log("After effect");
    return (
    <div>
        Todos:
        <button
        onClick={() =>{
            setCounter1(counter1 + 1);
        }}
        >
            Add to 1
            </button>

            <button
        onClick={() =>{
            setCounter2(counter2 + 1);
        }}
        >
            Add to 2
            </button>
        </div>
    ); 
}