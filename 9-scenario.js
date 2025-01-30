import http from 'k6/http';
//Scenarios are used to model and configure diverse workloads, or traffic patterns in load tests

export const options = {
    scenarios: {
      constant_load: {
        executor: 'constant-arrival-rate', //A fixed number of iterations are executed in a specified period of time
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