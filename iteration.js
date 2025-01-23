import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  iterations: 150,
  vus: 100,
  duration: '2m30s',
};

export default function(){
    http.get('http://localhost:3000/api/v1/students');

    sleep(1);
}