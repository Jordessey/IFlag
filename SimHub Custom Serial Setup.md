If you do not see the option for "Custom Serial Devices" as shown below.<br />
![image](https://github.com/user-attachments/assets/793b5f8c-a7f8-4cc9-9d66-1c7291b8dcbb)
	1. Select "Add/remove features" in the bottom left of SimHub<br />
 	2. Either scroll down and find or search for "Custom Serial Devices" and enable it<br />
  ![image](https://github.com/user-attachments/assets/1d145a58-e662-45a9-8726-603b3f99c463)
  	3. Select "Ok"<br />
<br /><br />
1. Create a new Custom Serial Device with the following settings<br />
	Serial Port: Select the applicable Serial Port.It will be named like "COM1 - Generic_F103C8TX..."<br />
	Baudrate: 921600<br />
	Enable RTS: ON<br />
	Enable DTR: ON<br />
	Log Incomming Data: OFF<br />
	Automatic Reconnect: ON<br />

![image](https://github.com/user-attachments/assets/d9ef0980-0c84-49ee-aebb-92d579eed422)
<br /><br />
3. To add the Update Messages<br />
	a. Select "Edit" on the "Update Messages" section.<br />
	b. On the pop up, select "Use Javascript"<br />
	c. There are two files in this link that contain the Javascript required.<br />
		https://github.com/Jordessey/JSSimsport-IFlag/tree/main/SimHub-Custom-Javascript<br />
	d. Copy the contents of "Run_Once.js" into the SimHub box "Run Once Javascript Code"<br />
	e. Copy the contents of "Javascript.js" into the SimHub box "Javascript".<br />
			If iRacing is not running the "Raw result" should show as "0:0:0:0:0"<br />
	f. Select "Ok" at the bottom<br />
![image](https://github.com/user-attachments/assets/a7f6c3ba-9d85-4630-80db-64962cb07432)
<br /><br />
4. Change the update Frequency<br />
	a. In the drop down box to the right of the update message, change it from the number present to "Changes Only"<br />
![image](https://github.com/user-attachments/assets/cfa0b1c5-974c-4147-a790-8f77f1be45e8)
<br /><br />
6. Set the disconnect message<br />
   a. select "EDIT" beside "Message before device Disconnect" and select "use NCALC".<br />
   b. Paste the following into the "NCALC Formula" box and click "Ok".<br />
   			'99:99:99:99:99'<br />
   c. Now do the same thing for the "Message after device Connect" and set the value to the following. This will cause the board to flash green briefly after connection.<br />
   			'2:0:0:0:0'<br />
   
![image](https://github.com/user-attachments/assets/7cf5bf32-5512-4538-9a48-6ceffe2770f2)
<br /><br />


The final Custom Serial Device should look like the following with your applicable Serial Port selected.<br />
![image](https://github.com/user-attachments/assets/28745963-a3b2-435b-8957-cbe12fb3b735)



  
