import http from 'k6/http';

import { sleep } from 'k6';
// get http request being called

export default function(){
    http.get('http://localhost:3000/healthcheck');

    sleep(1);
}