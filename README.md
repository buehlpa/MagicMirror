MagicMirror project 

A construction to integrate a smart mirror with an old frame

<img src="https://github.com/buehlpa/MagicMirror/assets/64488738/cc714f17-6069-44a8-893d-70add986ae0e" width="400">
<img src="https://github.com/buehlpa/MagicMirror/assets/64488738/5d0d68c2-ffc5-4383-b887-3f38d14fd2fb" width="400">



from https://github.com/MagicMirrorOrg/MagicMirror

Added a push-button to the frame to control the power to the screen to save Energy, switche the states on / off / timedependent

Wiring:
![image](https://github.com/buehlpa/MagicMirror/assets/64488738/e5cd18c1-3f0c-4a80-b462-0d42d5882358)



python script controls the relay:

- 1PCS 3V Relay High Level Driver Module optocouple Relay Module for Arduino CA

![image](https://github.com/buehlpa/MagicMirror/assets/64488738/06c76c45-0a2c-499c-aa8a-4d883b7dcad5)

! currently not working since moving to rasperry 5

## Syncing via Windows
Syncthing 

```
pm2 delete mm
pm2 start /home/raspelbeere1991/MagicMirror/mm_scripts/mm.sh --name mm --restart-delay 5000
pm2 save
```

enable startup , there will be a line to paste and run

```
pm2 startup
```

to stop

```
pm2 stop
```
to run again

```
pm2 start
```

open a new window with
ctrl+alt+t over all other processes

 Autostart at device startup
crontab, systemmd, rc.local didn't work for graphical programs.



