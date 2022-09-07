import Data from '../data/MovieData2.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MovieDataContext1 } from "../newContext"
import ReactPlayer from 'react-player'
import { Button, Box, AppBar } from '@mui/material';
import { fontSize } from '@mui/system';



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
                               data.back, data.movieName, data.price, data.occupied]
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


                            <Box className='btn-s' display="flex" flexDirection="column">

                                <Button variant="contained" color="success" onClick={() => { setIsData1(arr); setIsActive(true) }} style={{marginLeft:"10px", fontSize: "11px"}} >
                                    Дэлгэрэнгүй
                                </Button>

                                <Button variant="contained" className='btn-s2' onClick={() => { setIsData1(arr); setIsActive1(true) }} style={{marginLeft:"120px", fontSize: "11px"}}>
                                        Захиалах
                                </Button>
                                
                            </Box>
                        </div>
                    )
                })}


            </div >
            
        </div>


    )
}