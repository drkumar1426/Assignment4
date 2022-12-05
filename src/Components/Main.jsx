import React from 'react';
import axios from 'axios';
import './Main.css';
import XML from '../blogs.xml';
import { useEffect, useState } from 'react'
import XMLParser from 'react-xml-parser';
import { Link } from 'react-router-dom';


const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getXmlData();
    }, [])
    let i = 1;
    const getXmlData = async () => {
        const response = await axios.get(XML, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        var xml = new XMLParser().parseFromString(response.data);
        setBlogs(xml.children)
    }
    return (
        <div className='main'>
            {
                blogs.map((children) => {
                    return (
                        children.children.map((x) => {
                            let y = x.name.toUpperCase();
                            if (y === 'SUMMARY') {
                                const childData = x.children.map(z => {
                                    return z.value
                                })
                                return (
                                    <>
                                        <div className='posts'>
                                            <p ><img src={`${childData[0]}`} alt={`${childData[0]}`}></img></p>
                                        </div>
                                        <h5>{y}:</h5>
                                        <p>{childData[1]}</p>
                                    </>
                                )
                            }
                            else if (y !== 'BODY') {
                                return (
                                    <div>
                                        <div className='posts'>
                                            <h5>{y}:</h5>
                                            <p>{y !== 'TITLE' ? x.value : <Link to={`/post${i}`}>{x.value} </Link>}</p>
                                        </div>
                                    </div>
                                )
                            }
                            i++;
                        })
                    )

                })
            }
        </div>
    );
}

export default Main
