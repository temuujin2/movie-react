
import { MovieDataContext1 } from "../newContext" 
import ReactPlayer from 'react-player'

export function Booking() {

    const { isData1, setIsData1 } = MovieDataContext1()
    return (
        <>
            <div className="content-view">
                <div className="top-view">
                <ReactPlayer className="video-view" url={isData1[5]} />
                <div className="content-text">
                    <p>Киноны нэр: &#160;&#160;&#160;<b>{isData1[0]}</b></p>
                    <p>Киноны төрөл: &#160;&#160;&#160;<a>{isData1[1]}</a></p>
                    <p>Киноны Үргэлжлэх хугацаа: &#160;&#160;&#160;<a>{isData1[3]}</a></p>
                    <p>Дэлгэрэнгүй мэдээлэл: &#160;&#160;&#160;<a>{isData1[4]}</a></p>
                </div>
                </div>
                
            </div>
        </>
    )
}