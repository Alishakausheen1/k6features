import { check } from 'k6';
import http from 'k6/http';


export default function(){
    const res = http.get('http://localhost:3000/api/v1/students');
    check(res, {
        'is status 200': (r)=> r.status===200,
        'verify body': (r) =>
      r.body.includes('diana.blue@example.com'),

    });
}