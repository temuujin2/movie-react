import Data from '../data/MovieData2.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MovieDataContext1 } from "../newContext"
import ReactPlayer from 'react-player'
import Popup from './Popup';

export const Home = ({ data }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const { isData1, setIsData1 } = MovieDataContext1()

    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    if (isActive) return navigate('/Booking');
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
                    let arr = [data.name, data.kind, data.imageUrl, data.time, data.content]
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
                                    Дэлгэрэнгүй...
                                </button>

                                <div className='btn-s2'>
                                    <input
                                          type="button"
                                          value="Click to Open Popup"
                                          onClick={togglePopup}
                                        />
                                        {isOpen && <Popup
                                          content={<>
                                            <b>Design your Popup</b>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <button onClick={() => setIsData1(arr)}>Test button</button>
                                          </>}
                                          handleClose={togglePopup}
                                        />}
                                </div>
                                
                            </div>
                        </div>
                    )
                })}


            </div >
            
        </div>


    )
}