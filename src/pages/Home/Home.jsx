import { useSelector, useDispatch } from "react-redux"
import { changename } from '../../Store/slices/name'
import { changeLanguage } from '../../Store/slices/language'
import { increaseCounter } from '../../Store/slices/counter'
import { reduceCounter } from '../../Store/slices/counter'
import { changebg } from "../../Store/slices/background"
import {changecol} from"../../Store/slices/font"


export default function Home() {
    const lang = useSelector((state) => state.language.language)
    const name = useSelector((state) => state.name.name)
    const count = useSelector((state) => state.counter.counter)
    const bg = useSelector((state) => state.bg.bg)
    const f=useSelector((state)=>state.fontcol.fontcol)

    const dispatch = useDispatch()
    const tooglename = () => {
        dispatch(changename((name == "Ezz" ? "Ahmed" : "Ezz")))
    }
    const togglelang = () => {
        dispatch(changeLanguage((lang == "en") ? "ar" : "en"))
    }
    const increasecounter = () => {
        dispatch(increaseCounter())
    }
    const reducecounter = () => {
        dispatch(reduceCounter())
    }
    const change = () => {
        dispatch(changebg((bg == "white") ? "black" : "white"))
        dispatch(changecol((f=="black")?'white':"black"))
    }

    return <>
        <div style={{ display: "flex" }}>
            <div style={{ margin: "40px" }}>
                <p>{name}</p>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        tooglename();
                    }}
                >
                    change name
                </button>
            </div>
            <div style={{ margin: "40px" }}>
                <p>{lang}</p>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        togglelang();
                    }}
                >
                    change language
                </button>
            </div>
            <div style={{ margin: "40px" }}>
                <p>{count}</p>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        increasecounter();
                    }}
                >
                    Increase
                </button>
            </div>
            <div style={{ margin: "40px" }}>
                <p>{count}</p>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        reducecounter();
                    }}
                >
                    decrease
                </button>

            </div>



        </div>
        <button
            className="btn btn-success"
            onClick={() => {
                change();
            }}
        >
            change bg and font color
        </button>








    </>

}
