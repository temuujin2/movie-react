import { MovieDataContext } from "../MovieDataContext"
import { MovieDataContext1 } from "../newContext"   
export function Booking() {
    const { isData } = MovieDataContext();
    const { isData1, setIsData1 } = MovieDataContext1()
    return (
        <>
            <div className="content-view">
                <img src={isData1[2]}></img>
                <div className="content-text">
                    <p>Киноны нэр: &#160;&#160;&#160;<b>{isData1[0]}</b></p>
                    <p>Киноны төрөл: &#160;&#160;&#160;<a>{isData1[1]}</a></p>
                    <p>Киноны Үргэлжлэх хугацаа: &#160;&#160;&#160;<a>{isData1[3]}</a></p>
                    <p>Дэлгэрэнгүй мэдээлэл: &#160;&#160;&#160;<a>{isData1[4]}</a></p>
                </div>
            </div>
        </>
    )
}