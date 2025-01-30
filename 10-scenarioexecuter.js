import http from 'k6/http';

//Scenario executors
//Virtual user workload is scheduled by executors
//Types of executors:
//1. By number of iteration
//-shared-iterations:- share iteration between vus
//-per-vu-iterations:-run configuration for each vu
//2. By number of virtual users
//-constant-VUs: send vu at constant rate
//-ramping-vus:- ramp the vus according to the given stages
//3. By iteration rate
//-constant-arrival-rate:  starts iteration at constant rate
//-ramping-arrival-rate: ramp iteration according to the stages



export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 100,
      startTime: '0s',
    },
    per_vu_scenario: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 10,
      startTime: '10s',
    },
    ramping_vu_scenario: {
        executor: 'ramping-vus',
        startVUs: 0,
      stages: [
        { duration: '20s', target: 10 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',

      },
  },
};

export default function () {
  http.get('http://localhost:3000/api/v1/students');
}