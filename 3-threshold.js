import http from 'k6/http';

//threshold is pass/fail criteria that you define for your test metrics
//syntax is in option object
// define thresholds:{
//metric_Name : criteria it should pass,
//}
export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%

    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
   http_req_receiving: ['p(99)<100'],
    http_req_waiting: ['p(99)<50']
  },
};

export default function () {
    http.get('http://localhost:3000/api/v1/students')
}
