import http from 'k6/http';

import { sleep } from 'k6';// it is a break function after every call

// there are basically 2 ways to allocate virtual users for a particular test
 
export const options = {
 //1. in options object directly assigning number of users and duration for which the virtual users should be there
    vus: 200,
    duration:'30s',
    
    //2.in stages ramp up the number of virtual users for a particular duration and then ramp it down

     // stages: [
     // { duration: '30s', target: 20 },
      //{ duration: '1m30s', target: 10 },
      //{ duration: '20s', target: 0 },
    //],
  };

  export default function(){
    http.get('http://localhost:3000/api/v1/students');
    sleep(1);
  }