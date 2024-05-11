MagicMirror project 

A construction to integrate a smart mirror with an old frame

![image](https://github.com/buehlpa/MagicMirror/assets/64488738/5d0d68c2-ffc5-4383-b887-3f38d14fd2fb)

![image](https://github.com/buehlpa/MagicMirror/assets/64488738/cc714f17-6069-44a8-893d-70add986ae0e)


from https://github.com/MagicMirrorOrg/MagicMirror

Added a push-button to the frame to control the power to the screen to save Energy, switche the states on / off / timedependent

Wiring:
![image](https://github.com/buehlpa/MagicMirror/assets/64488738/e5cd18c1-3f0c-4a80-b462-0d42d5882358)



python script controls the relay:

- 1PCS 3V Relay High Level Driver Module optocouple Relay Module for Arduino CA

![image](https://github.com/buehlpa/MagicMirror/assets/64488738/06c76c45-0a2c-499c-aa8a-4d883b7dcad5)



## Autostart at device startup
crontab, systemmd, rc.local didn't work for graphical programs.

there are 2 bash scripts which open a terminal and run the python script as  well as the npm run start command from the magic mirror repo

To run them at startup go to:
```
nano etc/xdg/lxsession/LXDE-pi/autostart
```

and add:
```
@bash /home/termina_control.sh
@bash /home/startmagic.sh
```
