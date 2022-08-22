import { MovieDataContext } from "../MovieDataContext"
import { MovieDataContext1 } from "../newContext"
export function Coming() {
    const { isData1, setIsData1 } = MovieDataContext1()
    return (
        <div className="main-box-coming">
            <h2>{isData1[0]}</h2>
            <div className="times">
                <div className="time active-time">{isData1[6]}</div>
                <div className="time ">{isData1[7]}</div>
                <div className="time ">{isData1[8]}</div>
                <div className="time ">{isData1[9]}</div>
            </div>
            <div className="top-banner">
                <div className="shadow-banner"></div>
                <img src={isData1[10]}></img>
                
            </div>
            <div className="box-c1">
                    <div className="left-side"></div>
                    <div className="right-side">
                        
                    </div>
            </div>
        </div>
    )
}