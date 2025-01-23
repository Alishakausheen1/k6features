import http from 'k6/http';


export const options = {
    scenarios: {
      constant_load: {
        executor: 'constant-arrival-rate',
        preAllocatedVUs: 100,
        rate: 10,
        timeUnit: '1m',
       duration:'2m'
      },
    },
  };

  export default function () {
    http.get('http://localhost:3000/api/v1/students');
  }