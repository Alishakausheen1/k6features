import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { check } from 'k6';

const myTrend = new Trend('my_trend');

export default function () {
  
  const res = http.get('http://localhost:3000/api/v1/students', {
    tags: {
      my_tag: "I'm a tag",
    },
  });

  
  check(res, { 'status is 200': (r) => r.status === 200 }, { my_tag: "I'm a tag" });

  
  myTrend.add(res.timings.connecting, { my_tag: "I'm a tag" });
}