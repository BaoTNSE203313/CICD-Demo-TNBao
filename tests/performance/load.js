import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 20 }, // Tăng dần lên 20 user trong 5s
    { duration: '10s', target: 20 }, // Giữ ở mức 20 user trong 10s
    { duration: '5s', target: 0 },  // Giảm về 0 user trong 5s
  ],
};

export default function () {
  const res = http.get('http://localhost:3000/api/users');
  
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body size is > 0': (r) => r.body.length > 0,
  });

  sleep(1);
}
