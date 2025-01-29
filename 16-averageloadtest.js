import { sleep } from 'k6';
import http from 'k6/http';


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