import http from 'k6/http';
import { check } from 'k6';

//Correlation in load testing means extracting dynamic values (like session IDs, tokens, or IDs)
// from a response and using them in subsequent requests.

export default function () {
  // Make a request to get JSON data from the API
  const res = http.get('http://localhost:3000/api/v1/students');
  
  // Ensure the request was successful
  check(res, { 'status is 200': (r) => r.status === 200 });
  
  // Extract the students array from the response
  const students = res.json();

  // check the students array is not empty
  check(students, { 'students array is not empty': (s) => s.length > 0 });

  // Check if the first student's ID is 1 
  check(students[0], {
    'first student has correct ID': (student) => student.id === 1,
  });
}

