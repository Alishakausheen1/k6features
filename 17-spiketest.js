import { sleep } from 'k6';
import http from 'k6/http';
//spike test are the simulation of sudden and very high loads

export const options = {
    stages: [
        {duration: '2m', target: 2000},
        {duration: '1m', target: 0},
    ],
}

export default function(){
    http.post('http://localhost:3000/api/v1/students');
    sleep(1);
}