1. Create a new Custom Serial Device with the following settings
	Serial Port: Select the applicable Serial Port.It will be named like "COM1 - Generic_F103C8TX..."
	Baudrate: 921600
	Enable RTS: ON
	Enable DTR: ON
	Log Incomming Data: OFF
	Automatic Reconnect: ON

![image](https://github.com/user-attachments/assets/d9ef0980-0c84-49ee-aebb-92d579eed422)


3. To add the Update Messages
	a. Select "Edit" on the "Update Messages" section.
	b. On the pop up, select "Use Javascript"
	c. There are two files in this link that contain the Javascript required.
		https://github.com/Jordessey/JSSimsport-IFlag/tree/main/SimHub-Custom-Javascript
	d. Copy the contents of "Run_Once.js" into the SimHub box "Run Once Javascript Code"
	e. Copy the contents of "Javascript.js" into the SimHub box "Javascript".
			If iRacing is not running the "Raw result" should show as "0:0:0:0:0"
	f. Select "Ok" at the bottom
![image](https://github.com/user-attachments/assets/a7f6c3ba-9d85-4630-80db-64962cb07432)

4. Change the update Frequency
	a. In the drop down box to the right of the update message, change it from the number present to "Changes Only"
![image](https://github.com/user-attachments/assets/cfa0b1c5-974c-4147-a790-8f77f1be45e8)

6. Set the disconnect message
   a. select "EDIT" beside "Message before device Disconnect" and select "use NCALC".
   b. Paste the following into the "NCALC Formula" box and click "Ok".
   			'99:99:99:99:99'
![image](https://github.com/user-attachments/assets/7cf5bf32-5512-4538-9a48-6ceffe2770f2)



The final Custom Serial Device should look like the following with your applicable Serial Port selected.
![image](https://github.com/user-attachments/assets/28745963-a3b2-435b-8957-cbe12fb3b735)


  
