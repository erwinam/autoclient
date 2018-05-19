@echo off

docker run -d -p 8080:8080 mschaffl/autos:v2

docker run -d -p 80:80 auto-manager:v1

start http://localhost

pause