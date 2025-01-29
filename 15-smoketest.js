import http from 'k6/http';
import { sleep } from 'k6';

export const options={
    vus:5,//shouldn't be more than 5 virtual users
    duration:'40s',
};

export default function(){
    http.post('http://localhost:3000/api/v1/students');
    sleep(1);
}