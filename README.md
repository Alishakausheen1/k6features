Most of the function use a particular rest api 



To work on most of the functions 
Run following commands

Step1:-

git clone https://github.com/Junnygram/student-crud-api.git
cd student-crud-api/
npm install

Step2:-

Build the Docker image by using 

docker build -t student-crud-api:1.0.0 .

Step 3:-

Run the Docker container with environment variables:

docker run -d -p 3000:3000 --name student-crud-api -e PORT=3000 student-crud-api:1.0.0
