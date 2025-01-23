import http from 'k6/http';
//To simulate that a cookie has previously been set by a browser and is now supposed to be included in subsequent requests to the server, include the cookie in the cookies request parameter
export default function () {
  
    const jar = http.cookieJar();
    jar.set('http://localhost:3000/api/v1/students/cookies', 'my_cookie', 'hello world');
    http.get('http://localhost:3000/api/v1/students/cookies');
  
}