from gpiozero import Button, OutputDevice,TimeOfDay
from datetime import datetime,time as t
from signal import pause
import time
import os
import tkinter as tk

'''
This script takes the input from a push button and controls
the relais which is controls the power for the screen its normally closed
if the relais gets the signal -> the screen shuts off, this way its secured
that the screen is on by default
'''

# GPIO PINS
button = Button("BOARD36")
relay = OutputDevice("BOARD7")

# default relaystate
relay.off()

# default state
state = 0
pressed_time = None

# Timer in state 2
ontime_morning=t(hour=7, minute=0, second=0, microsecond=0)
offtime_evening=t(hour=10, minute=33, second=0, microsecond=0)


def display_message(message,milliseconds=3000):
    root = tk.Tk()
    root.attributes('-topmost', True)  # Make the window stay on top
    root.overrideredirect(True)  # Remove the title bar
    root.geometry("800x100")  # Set the window size to create a square shape
    label = tk.Label(root, text=message,font=("Helvetica", 18))
    label.pack()
    def close_window():
        root.destroy()
    root.after(milliseconds, close_window)
    root.mainloop()

def change_state():
    global state
    state = (state + 1) % 3  # Cycling between 0, 1, and 2
    update_output()

def message_while_pressed():
    global pressed_time
    pressed_time = time.time()

def message_when_released():
    global pressed_time
    if time.time() - pressed_time >= 0.2:
        change_state()

def update_output():
    _=os.system('clear')
    global state
    now = datetime.now().time()
   
    if state == 0:
         relay.off()
         print("screen on")
         display_message("\nModus: Ein",5000)
               
    elif state == 1:
        if ontime_morning < now < offtime_evening:
            relay.off()
            print("screen on in timeslot")
            display_message("\nModus: Zeitschaltuhr ")
           
        else:  
            for count in range(3, 0, -1):
                display_message(f'\nModus: Zeitschaltuhr\n AUS in {count}')
                time.sleep(1)  # Wait for 1 second

            relay.on()
            print("screen off out timeslot")
                     
    elif state == 2:
        for count in range(3, 0, -1):
            display_message(f'\nModus: AUS in {count}',1000)          
        relay.on()
        print("screen off")
       

def relay_day():
    global state
    if state == 1:
        relay.off()
        update_output()
       
def relay_night():
    global state
    if state == 1:
        relay.on()
        update_output()

   
# signal for daytime
daytime=TimeOfDay(ontime_morning,offtime_evening)

#  signaling
daytime.when_activated=relay_day
daytime.when_deactivated=relay_night

button.when_pressed = message_while_pressed
button.when_released = message_when_released

update_output()  # Initial output update based on the initial state

pause()