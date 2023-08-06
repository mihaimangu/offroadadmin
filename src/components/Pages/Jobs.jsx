import React, { useEffect, useState } from 'react';

import { getAllCrawlJobs, addCrawlJob } from '../../api/general';
import JobList from '../Organisms/Jobs/JobList';


const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getAllCrawlJobs().then((res) => {
            console.log('got all jobs', res);
            setJobs(res.data);
        }).catch(err => {
            console.log('error getting jobs', err);
        });
    }, [])

    return (
        <div>
            <h1>Crawl Jobs</h1>
            {jobs.length ?  <JobList data={jobs} /> : <p>There are no jobs</p>}
           <h2>Add a new job</h2>
        </div>
    );
}

export default Jobs;