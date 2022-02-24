A clock in your browser which displays the current time converted to [decimal time](https://en.wikipedia.org/wiki/Decimal_time), as an analog and digital readout.

View the deployed project at: https://bald-obsidian-bearberry.glitch.me/

Project Structure:
 - Deployed files are in the src folder. Some notes:
   - script.js holds a JS class `decimalTime`, 
 which is exactly the same as it's Python equivalent.
   - style.css is what you'd expect. 
 Notably, the entire analog clock is driven by CSS. 
 JavaScript is only used at the very beginning 
 to grab the system time from your browser and set the clock.
 - Python modules:
   - main.py holds a Python class `decimal_time`, 
which has the mechanics to get the system time, 
convert it to decimal time, and display it.
   - clockface.py has a function for producing a Matplotlib drawing, 
 which can be saved to disk and used as a clockface in the deployed project.