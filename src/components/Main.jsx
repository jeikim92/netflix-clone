import React, { useEffect, useState } from 'react'
import './Main.css'
import requests from '../requests';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [play, setPlay] = useState("재생");

    const movie = movies[Math.floor(Math.random() * movies.length)]
    
    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data.results)
        })
    },[])
    
    
    // 유튜브 트레일러
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => {console.log(error);})
        }
        playDesign();
    }

    const playDesign = () => {
            const playBtn = document.getElementById('play-btn');
            playBtn.classList.toggle('clicked');
            if(play === "재생"){
                setPlay("재생중...");
            } else {
                setPlay("재생");
            }
    }

    // console.log(movie);

    const trucateString =  (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...'
        } else{
            return str
        }
    }

  return (
    <>
        <div className='w-full h-[550px] text-white'>
            <div className="w-full h-full relative">
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='absolute top-[0] left-[0] w-full h-full object-cover bg-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute bottom-[0] left-[0] w-full h-[200px] bg-gradient-to-t from-black'></div>
                <div className='absolute w-full top-[30%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl drop-shadow-md'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button id={'play-btn'} className='border bg-gray-200 text-black py-2 px-5 hover:bg-gray-100 duration-300' onClick={() => handleClick(movie)}>{play}</button>
                        <button className='border text-white py-2 px-5 ml-4 hover:bg-gray-100 hover:bg-opacity-10 duration-300'>좋아요</button>
                    </div>
                    <p className='text-gray-300 text-sm'>개봉일: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{trucateString(movie?.overview, 150)}</p>
                </div>
            </div>
        </div>
        { trailerUrl && < YouTube videoId={trailerUrl} opts={opts} /> }
    </>
  )
}

export default Main