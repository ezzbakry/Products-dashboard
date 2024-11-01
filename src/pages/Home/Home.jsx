import { useSelector, useDispatch } from "react-redux"
import { changename } from '../../Store/slices/name'
import { changeLanguage } from '../../Store/slices/language'
import { increaseCounter } from '../../Store/slices/counter'
import { reduceCounter } from '../../Store/slices/counter'
import { changebg } from "../../Store/slices/background"
import { changecol } from "../../Store/slices/font"
import { namecontext } from "../../context/name"
import { useContext } from "react"
import { useReducer } from "react"
const initialcounter = { counter: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { counter: state.counter + 1 }
        case 'reset':
            return initialcounter
        case 'decrease':
            return { counter: state.counter - 1 }

    }

}


export default function Home() {
    const lang = useSelector((state) => state.language.language)
    const name = useSelector((state) => state.name.name)
    // const count = useSelector((state) => state.counter.counter)
    const { Name, setname } = useContext(namecontext)
    const [state, disp] = useReducer(reducer, initialcounter)


    const dispatch = useDispatch()
    const tooglename = () => {
        dispatch(changename((name == "Ezz" ? "Ahmed" : "Ezz")))
    }
    const togglelang = () => {
        dispatch(changeLanguage((lang == "en") ? "ar" : "en"))
    }
    // const increasecounter = () => {
    //     dispatch(increaseCounter())
    // }
    // const reducecounter = () => {
    //     dispatch(reduceCounter())
    // }
    return <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
            {/* Section for name and language buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", width: "100%" }}>
                <div style={{ margin: "20px" }}>
                    <p>{name}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            tooglename();
                        }}
                    >
                        Change Name
                    </button>
                </div>
                <div style={{ margin: "20px" }}>
                    <p>{lang}</p>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            togglelang();
                        }}
                    >
                        Change Language
                    </button>
                </div>
            </div>

            {/* Counter display */}
            <p style={{ textAlign: "center", margin: "20px 0" }}>Counter: {state.counter}</p>

            {/* Increase, Decrease, Reset buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", width: "100%" }}>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        disp({ type: "increase" });
                    }}
                >
                    Increase
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        disp({ type: "decrease" });
                    }}
                >
                    Decrease
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        disp({ type: "reset" });
                    }}
                >
                    Reset
                </button>
            </div>

            {/* Context-based name change button */}
            <div style={{ marginTop: "20px" }}>
                <p>{Name}</p>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        setname(Name === "Ezz" ? "Amer" : "Ezz");
                    }}
                >
                    Change Name with Context
                </button>
            </div>
        </div>

    </>

}
