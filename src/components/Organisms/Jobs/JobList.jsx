import React, { useState } from "react";
import './JobList.scss'


const CrawlJobItem = ({name, targetList, url}) => {
    const [expended, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expended);
    }

    // truncate the url to max 20 characters;
    const stringLength = 60;
    const shortUrl = url.length > stringLength ? url.substring(0, stringLength) + '...' : url;
 


    return (<div className="crawl-jobs__element" onClick={toggleExpanded}>
        <div className="crawl-jobs__element-main-info">
            <div>Name: {name}</div>
            <div>List: {targetList}</div>
        </div>
        <div className="crawl-jobs__element-url">Url: {expended ? url : shortUrl}</div>
    </div>)
}


const JobList = ({data}) => {


    return <div className="crawl-jobs__wrapper">
        <p>This is a job list</p>
        {data.map(job => {
            const {name, targetList, url} = job;

   
            return <CrawlJobItem name={name} targetList={targetList} url={url} />
        })}


    </div>

}

export default JobList;