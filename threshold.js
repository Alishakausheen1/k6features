import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], 
    http_req_duration: ['p(95)<200'], 
    http_req_receiving: ['p(99)<100'],
    http_req_waiting: ['p(99)<50']
  },
};

export default function () {
    http.get('http://localhost:3000/api/v1/students')
}
