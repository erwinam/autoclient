@echo off

call ng new AutoManager -s -t -S --style=scss

cd AutoManager

call ng generate component AutoEingabe --flat -s -t

call ng generate component AutoTabelle --flat -s -t

call ng generate service AutoClient --flat

pause