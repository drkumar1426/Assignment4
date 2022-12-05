import React, { useState, useEffect } from 'react'
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=f99ae8fde0d443df898e2883ab7cf3dc`;

const ApiResponse = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        getAPI()

    }, [])
    const getAPI = async () => {
        try {
            const api_call = await fetch(API_URL);
            let data = await api_call.json();
            data = data.articles.slice(2)
            setNews(data)
        }
        catch (e) { console.log("attempt to fetch news api failed", e) }
    }

    setInterval(getAPI, 60000);
    if (news) {
        return (
            <div className="newsapi">
                {news.map((news) => {
                    var d = new Date(news.publishedAt)
                    return <div className="APIcontent" key={news.url}>
                        <h3>{news.title}</h3>
                        <img src={`${news.urlToImage}`} alt='news-image' style={{ height: '33vh', width: '38vw' }}></img>
                        <p className="source_des"><strong>{news.description}</strong></p>
                        <p className="source_name">{news.source.name}</p>
                        <p>{d.toLocaleDateString()}</p>
                        <p className="source_content">{news.content}</p>
                        <p className="source_url"><a target="_blank" href={news.url}>{news.url}</a></p>
                    </div>
                })}
            </div>
        );
    } else {
        return (
            <div className="newsapi">API http request denied possibly because of reaching request limitation</div>
        )
    }

}

export default ApiResponse
