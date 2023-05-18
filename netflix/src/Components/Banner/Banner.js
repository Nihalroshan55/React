import React, { useState ,useEffect} from 'react'
import {imageURl} from '../../constents/constents'
import './Banner.css'
import axios from '../../axios'
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function Banner(props) {
    const [movie ,setMovie] = useState()
    let Number = randomNumber(0, 20);
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data.results[Number])
            setMovie(response.data.results[Number])
        })
    },[])
    return (
        <div 
        style={{backgroundImage: `url(${movie ? imageURl+movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title:null} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:null}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner