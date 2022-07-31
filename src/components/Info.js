import React, { useState } from 'react';
import './Info.css';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Info() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='info'>
            <div className="info__container">
                <div className="info__wrapper">
                    <ul className="info__items">
                        <li className="info__item">
                            <h2 className="info__item__text intro">
                            Kristine is currently a 4th year BSc Computer Science major at the University of
                            British Columbia (UBC). Since May 2022, she is currently interning at Wealthsimple as a software developer.
                            For most of her internship, she has been contributing to the front-end designs of the Wealthsimple unified app.
                            She mainly programs in React Native (TypeScript). She takes accountability for her learning and growth in software
                            engineering by taking the initiative to pick up tickets that allow her to work with the frontend and backend of the app.
                            She has contributed to several features in the app that can be seen on the frontend. 
                            <br /> <br />
                            
                            From September 2021 to April 2022, she interned SAP Vancouver as
                            an Agile Developer. During her internship, she has worked on a variety of frontend
                            and backend tickets where she had to write, read and understand JavaScript, TypeScript, and SQL.
                            In addition to these tickets, she has also been working with a full-time developer on 
                            microservices which includes deploying changes for one of SAP's products.
                            <br/> <br/>

                            Aside from work as an intern, Kristine worked as a TA at UBC for an
                            introductory Computer Science course from January 2020 - April 2022. To contribute to her
                            community, she volunteers at her local hospital as an Emergency Department Greeter 
                            every Saturday.

                            <br/> <br/>

                            To relax, Kristine enjoys going to the gym for strength training,
                            watching movies and TV, spending time with her friends, family, dog and bunny. 


                            </h2>
                        </li>
                        
                    </ul>
                    <h2 className='info__title'>Programming Languages</h2>
                    <ul className="info__items">
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Java
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Python
                            </h2>
                        </li>
                    </ul>
                    <h2 className='info__title'>Tools/Environment</h2>
                    <ul className="info__items">
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Git/GitHub
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Jasmine
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Selenium
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Gerrit
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            Jira
                            </h2>
                        </li>
                    </ul>
                    <h2 className='info__title'>Currently Learning</h2>
                    <ul className="info__items">
                        <li className="info__item">
                            <h2 className="info__item__text">
                            JavaScript
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            TypeScript
                            </h2>
                        </li>
                        <li className="info__item">
                            <h2 className="info__item__text">
                            React
                            </h2>
                        </li>
                    </ul>
                    <h2 className='info__title'>Resume</h2>
                    <div className="info__resume__download">
                        <a href="./resume-kristinegonzales.pdf" download>Download Resume</a>
                    </div>
                    <ul className="info__items">
                        <li className="info__item">
                            <div className="info__resume">
                                <Document
                                file="./resume-kristinegonzales.pdf"
                                onLoadSuccess={onDocumentLoadSuccess} 
                                >
                                <Page pageNumber={pageNumber} scale='0.65'/>
                                </Document>
                            </div>
                            
                        </li>
                    </ul>
                </div>       
            </div>
        </div>

    )
}

export default Info;
