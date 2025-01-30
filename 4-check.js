import { check } from 'k6';
import http from 'k6/http';

//Checks validate boolean conditions in your test

export default function(){
    const res = http.get('http://localhost:3000/api/v1/students');
    check(res, {
        'is status 200': (r)=> r.status===200, // to check status code
        'verify body': (r) => // to check body as sometimes the body can have error even after getting status code 200 
      r.body.includes('diana.blue@example.com'),

    });
}