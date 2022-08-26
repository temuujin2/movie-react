import Data from '../data/MovieData2.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MovieDataContext1 } from "../newContext"
import ReactPlayer from 'react-player'


export const Home = ({ data }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const { setIsData1 } = MovieDataContext1()
    

 

    if (isActive) return navigate('/Booking');
    if (isActive1) return navigate('/Coming');
    return (
        <div className='main2'>
            <div className='video-box'>
                <ReactPlayer className='react-player' loop controls url='https://firebasestorage.googleapis.com/v0/b/leap-1-mini-games.appspot.com/o/videoplayback.mp4?alt=media&token=24143faa-cada-4f5c-b030-c16033f40096'
                    width='100%'
                    height='150%'
                />

            </div>
            <div className='father-grid'>

                {Data && Data.map(data => {
                    let arr = [data.name, data.kind, data.imageUrl, 
                               data.time, data.content, data.trailer, 
                               data.time1, data.time2, data.time3, data.time4,
                               data.back]
                    return (
                        <div className='grid'>
                            <img src={data.imageUrl} className='poster'></img>
                            {data.name}
                            <div className='kind'>
                                Төрөл: {data.kind}

                            </div>
                            <div className='lang'>
                                Үргэлжлэх хугацаа: {data.time}
                            </div>


                            <div className='btn-s'>

                                <button onClick={() => { setIsData1(arr); setIsActive(true) }} style={{ left: "10px", background: "rgb(0, 174, 255)" }}>
                                    Дэлгэрэнгүй
                                </button>

                                <button className='btn-s2' onClick={() => { setIsData1(arr); setIsActive1(true) }}>
                                        Захиалах
                                </button>
                                
                            </div>
                        </div>
                    )
                })}


            </div >
            
        </div>


    )
}