import React, { useState ,useEffect} from 'react'
import {API_KEY, imageURl} from '../../constents/constents'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [video,setVideo]=useState('')
    useEffect(()=>{
        axios.get(props.urls).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        autoplay: 1,
        },
      };
      const handler=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language-en-US`).then(response=>{
            if (response.data.results.length!==0){
                setVideo(response.data.results[0])
        }}
        )
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
               {movies.map((movie,index)=>{
               return(<div><img onClick={()=>handler(movie.id)} key={index} className={props.small ? 'smallPoster' : 'poster'} alt='poster'  src={`${imageURl+movie.backdrop_path}`} />
               <li className='name'>{movie.title}</li></div>
               )})
               }
            </div>
            
            {video && <Youtube opts={opts} videoId={video.key}/>}
        </div>
    )
}

export default RowPost