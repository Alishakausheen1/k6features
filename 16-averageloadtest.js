import { sleep } from 'k6';
import http from 'k6/http';

//The goal of an average-load test is to simulate the average amount of activity on a typical day in production.
//  The pattern follows this sequence:
//Increase the script’s activity until it reaches the desired number of users and throughput.
//Maintain that load for a while
//stop the test or let it ramp down gradually.



export const options = {
    stages: [
        {duration: '2m', target: 50},
        {duration: '1m', target: 50},
        {duration: '30s', target: 0},
    ],
}

export default function(){
    http.post('http://localhost:3000/api/v1/students');
    sleep(1);
}