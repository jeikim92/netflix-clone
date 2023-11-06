import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import YouTube from 'react-youtube'


const Row = ({title, fetchURL, rowID, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL])


    // 슬라이더 버튼
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // 유튜브 트레일러
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

  return (
    <div className='lg:mb-2 mb-0'>
        <h2 className='text-white font-bold sm:text-md lg:text-xl pt-4 pb-2 px-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute left-2 opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' size={30} />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide scroll'>
                {movies.map((item, id) => (
                    <Movie item={item} key={id} isLargeRow={isLargeRow} trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-2 opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' size={30} />
        </div>
        <div className='duration-200 xl:my-10'>
            { trailerUrl && < YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    </div>
  )
}

export default Row