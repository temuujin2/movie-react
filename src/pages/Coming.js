
import { MovieDataContext1 } from "../newContext"
import './Style.css'
import React, { useState } from 'react'
import clsx from 'clsx'

const movies = [
    {
      name: 'Super Pets',
      price: 7000,
      occupied: [20, 21, 30, 1, 2, 8],
    },
    {
      name: 'Самуурайн Түүх',
      price: 8000,
      occupied: [9, 41, 35, 11, 65, 26],
    },
    {
      name: 'Minoins 2: The Rise of Gru',
      price: 7500,
      occupied: [37, 25, 44, 13, 2, 3],
    },
    {
      name: 'THOR: Love and Thunder',
      price: 8000,
      occupied: [10, 5, 2, 4, 9, 22],
    },
    {
      name: 'Bullet Train IMAX',
      price: 7900,
      occupied: [20, 12, 13, 14, 21, 22],
    },
    {
      name: 'Paradise Highway',
      price: 7400,
      occupied: [10, 12, 50, 33, 28, 47],
    },
    {
      name: 'Саран Хийл',
      price: 8000,
      occupied: [9, 41, 35, 11, 65, 26],
    },
    {
      name: 'Room 203',
      price: 7200,
      occupied: [5, 6, 10, 20, 21, 22],
    }
  ]
  
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)


export function Coming() {
    // ---------- select seat useState --------------------------->
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedSeats, setSelectedSeats] = useState([])
    // ---------- data Context ----------------------------------->
    const { isData1, setIsData1 } = MovieDataContext1()
    // ----------  form useState --------------------------------->
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [list, setList] = useState([])
    
    const handleSubmit=(e) => {
      e.preventDefault();
      console.log(name, email, phone)
      const date = {name, email, phone}
      if(name&&email&&phone) {
        setList((ls)=>[...ls, date])
        setName('')
        setPhone('')
        setEmail('')
      }
    }
    return (
        <div className="main-box-coming">
            
            <div className="top-banner">
                <div className="shadow-banner"></div>
                <img src={isData1[10]}></img>
            </div>
            <div className="box-c1">
            <div className="times">
                <div className="time ">{isData1[6]}</div>
                <div className="time ">{isData1[7]}</div>
                <div className="time ">{isData1[8]}</div>
                <div className="time ">{isData1[9]}</div>
            </div>
                <div className="left-side">
                <h2>{isData1[0]}</h2>
                    <div className="left-inside">
                    
                    <img src={isData1[2]}></img>
                        <form onSubmit={handleSubmit}>
                          <label>
                            <input type="text" placeholder="Нэр:" value={name} onChange={(e)=> setName(e.target.value)}/>
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Утас:" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Имэйл:" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                          </label>

                          <label>
                            
                            <input type="text" placeholder="Том хүн"/>
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Хүүхэд"/>
                          </label>
                          <button>Мэдээлэл оруулах</button>
                          

                          
                        </form>
                        </div>
                        
                    </div>
                <div className="right-side">
                        
                    <div className="App">
                        <Movies
                            movie={selectedMovie}
                            onChange={movie => {
                              setSelectedSeats([])
                              setSelectedMovie(movie)
                            }}
                        />
                        <ShowCase />
                        <Cinema
                          movie={selectedMovie}
                          selectedSeats={selectedSeats}
                          onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                        />

                        
                    </div>
                    <p className="info">
                          <li>Таны сонгосон суудал <span className="count">{selectedSeats.length}</span></li>{' '}
                          Суудлын нийт төлөлт{' '}
                          <span className="total">
                            {selectedSeats.length * selectedMovie.price}₮
                          </span>
                          <div>
                          {list.map((a)=><div>
                             <li>Захиалагчийн нэр: <span>{a.name}</span></li>
                             <li>Захиалагчийн утас: <span>{a.phone}</span></li>
                             <li>Захиалагчийн имэйл: <span>{a.email}</span></li>
                          </div>)}
                        </div>
                        </p>

                </div>
                            
            </div>
        </div>
    )
}
function Movies({ movie, onChange }) {
    return (
      <div className="Movies">
        <label htmlFor="movie">Киногоо сонгох</label>
        <select
          id="movie"
          value={movie.name}
          onChange={e => {
            onChange(movies.find(movie => movie.name === e.target.value))
          }}
        >
          {movies.map(movie => (
            <option key={movie.name} value={movie.name}>
              {movie.name} ({movie.price}₮)
            </option>
          ))}
        </select>
      </div>
    )
  }
  


  function ShowCase() {
    return (
      <ul className="ShowCase">
        <li>
          <span className="seat" /> <small>Хоосон суудал</small>
        </li>
        <li>
          <span className="seat selected" /> <small>Сонгосон</small>
        </li>
        <li>
          <span className="seat occupied" /> <small>Сонгодсон суудал</small>
        </li>
      </ul>
    )
  }
  
  function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    function handleSelectedState(seat) {
      const isSelected = selectedSeats.includes(seat)
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter(selectedSeat => selectedSeat !== seat),
        )
      } else {
        onSelectedSeatsChange([...selectedSeats, seat])
      }
    }
  
    return (
      <div className="Cinema">
        <div className="screen" />
  
        <div className="seats">
          {seats.map(seat => {
            const isSelected = selectedSeats.includes(seat)
            const isOccupied = movie.occupied.includes(seat)
            return (
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  'seat',
                  isSelected && 'selected',
                  isOccupied && 'occupied',
                )}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
                onKeyPress={
                  isOccupied
                    ? null
                    : e => {
                        if (e.key === 'Enter') {
                          handleSelectedState(seat)
                        }
                      }
                }
              />
            )
          })}
        </div>
      </div>
    )
  }