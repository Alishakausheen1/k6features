import http from 'k6/http';
//to run different scenarios for different functions

//Suppose you want to test different apis in the same test then for that we use exec property of scenario 
//-Write different vus functions and scenarios for different apis 
//-In the particular scenario that you want to use for any particular function add exec property like


export const options = {

  scenarios: {
    students: {
      executor: 'shared-iterations',
      exec: 'students',// the name of the function that will use this particular scenario
      vus: 80,
      iterations: 100,
    },
    
    health: {
      executor: 'shared-iterations',
      exec: 'health',
      vus: 20,
      iterations: 100,
    },
  },
};


export function students() {
  http.get('http://localhost:3000/api/v1/students');
}

export function health() {
  http.get('http://localhost:3000/healthcheck');
}