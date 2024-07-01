# Performance test
For the Load testing assigment, I used Grafana k6.


## Run with Docker

```bash
docker run --rm -i --env-file .env.local  grafana/k6 run - < tests/script.js
```
