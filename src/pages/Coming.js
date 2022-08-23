
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
      occupied: [10, 12, 11, 20, 9, 2],
    },
    {
      name: 'Bullet Train IMAX',
      price: 7900,
      occupied: [10, 12, 50, 33, 28, 47],
    },
    {
      name: 'Paradise Highway',
      price: 7400,
      occupied: [10, 12, 50, 33, 28, 47],
    },
    {
      name: 'Саран Хийл',
      price: 8000,
      occupied: [10, 12, 50, 33, 28, 47],
    },
    {
      name: 'Room 203',
      price: 7200,
      occupied: [10, 12, 50, 33, 28, 47],
    }
  ]
  
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)


export function Coming() {
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedSeats, setSelectedSeats] = useState([])
    const { isData1, setIsData1 } = MovieDataContext1()
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
                        <form>
                          <label>
                            <input type="text" placeholder="Нэр:" />
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Утас:"/>
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Имэйл:"/>
                          </label>

                          <label>
                            
                            <input type="text" placeholder="Том хүн"/>
                          </label>
                          <label>
                            
                            <input type="text" placeholder="Хүүхэд"/>
                          </label>
                          <input type="submit" />

                          
                        </form>
                        </div>
                        <button>Next</button>
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

                        <p className="info">
                          Таны сонгосон суудал <span className="count">{selectedSeats.length}</span>{' '}
                          Суудлын нийт төлөлт{' '}
                          <span className="total">
                            {selectedSeats.length * selectedMovie.price}₮
                          </span>
                        </p>
                    </div>
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