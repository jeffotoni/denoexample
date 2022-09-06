import http from 'k6/http';
import { sleep } from 'k6';

const headers = { 'Content-Type': 'application/json' };

export default function () {
  http.get(`http://127.0.0.1:8080/ping`,{ headers: headers });
}
