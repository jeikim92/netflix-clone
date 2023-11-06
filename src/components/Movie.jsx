import React, { useState } from 'react'
import { BsPlusCircle, BsPlusCircleFill } from 'react-icons/bs'
import movieTrailer from 'movie-trailer';

function Movie({item, isLargeRow, trailerUrl, setTrailerUrl }) {
    const [like, setLike] = useState(false);
    
    const handleClick = (item) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(item?.title || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => {console.log(error);})
        }
    }

  return (
    <>
        <div
        className={`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2 overflow-hidden rounded duration-300 hover:scale-105 ${isLargeRow && "h-[260px] sm:h-[320px] md:h-[360px] lg:h-[380px] hover:rounded-lg"}`}
        onClick={() => handleClick(item)}
        >
            <img className={`w-full h-auto block ${isLargeRow && "h-full object-cover"}`}
                src={`https://image.tmdb.org/t/p/w500/${isLargeRow ? item?.poster_path : item?.backdrop_path}`}
                alt={item?.title}
                />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white duration-300'>
                <p className="white-space-nowrap truncate lg:text-xl text-xs font-bold flex justify-center items-center drop-shadow-xl h-full text-center">
                    {item?.title}
                </p>
                <p>
                    {like ? <BsPlusCircleFill className='absolute lg:top-6 lg:right-6 top-4 right-4 text-xl text-gray-300' /> : <BsPlusCircle className='absolute lg:top-6 lg:right-6 top-4 right-4 text-xl text-gray-300' />}
                </p>
            </div>
        </div>
    </>
  )
}

export default Movie