```bash
yarn && docker-compose up -d
```

```bash
docker run -d -h mysql -v /Volumes/meepo/nestjs/docker/nestjs/data/mysql:/var/lib/mysql -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root mysql -h 172.17.0.2

docker run --name phpadmin -d -e PMA_HOST=172.17.0.2 PMA_PORT=3306 --link mysql:db -p 9998:80 phpmyadmin/phpmyadmin
```
