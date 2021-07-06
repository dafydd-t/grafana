local arr = std.range(1, 300);

{
    "apiVersion": 1,
    "datasources": [
        {
            "name": 'gfdev-bulkalerting-' + counter,
            "type": "prometheus",
            "access": "proxy",
            "url": if counter % 2 == 0 then "http://localhost:9090" else "https://prometheus-us-central1.grafana.net/api/prom"
        }
        for counter in arr
    ],
}
