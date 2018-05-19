@echo off

cd ..

call ng build --prod

cd dist

docker build -t auto-manager:v1 .

pause