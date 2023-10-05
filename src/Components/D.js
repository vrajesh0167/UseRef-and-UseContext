import React, { useContext } from 'react'
import E from './E'
import { ThemesContext } from './A'



export default function D() {
    const thems = useContext(ThemesContext)
    // const [themsContext, setThemsContext] = useState(thems.light) 

    // const modeChangeHandler = () =>{
    //     setThemsContext(themsContext =>{
    //         if(themsContext === thems.dark){
    //             return themsContext = thems.light
    //         } else if (themsContext === thems.light){
    //             return themsContext = thems.dark
    //         }else{
    //             return themsContext
    //         }
    //     })
    // }
    return (
        <div>
            {/* <button onClick={modeChangeHandler}>mode change</button> */}
            <div style={{backgroundColor: thems.background, color: thems.color, padding: "20px"}}>
                <h2>Hello Everyone</h2>
            </div>
            <E></E>
        </div>
    )
}
