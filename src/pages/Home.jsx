import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../requests'

function Home() {
  return (
    <div>
        <Main />
        <Row rowID='1' title='새로 올라온 콘텐츠' fetchURL={requests.requestUpcoming} isLargeRow />
        <Row rowID='2' title='평단의 찬사를 받은' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='지금 뜨는 콘텐츠' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='평론가의 호평을 받은' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='넷플릭스 추천' fetchURL={requests.requestRecommend} />
        <Row rowID='6' title='"좋아요"를 많이 받은' fetchURL={requests.requestLatest} />
    </div>
  )
}

export default Home