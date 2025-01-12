<h1>Enabling Custom Serial Devices</h1>

If you do not see the option for "Custom Serial Devices" as shown below.
<br />
![image](https://github.com/user-attachments/assets/793b5f8c-a7f8-4cc9-9d66-1c7291b8dcbb)
<br />
<ol>
	<li>Select "Add/remove features" in the bottom left of SimHub</li>
 	<li>Either scroll down and find or search for "Custom Serial Devices" and enable it</li>
  	<li>Select "Ok"</li>
</ol>
<br /><br /><br /><br />
<h1>Setting up the Serial Device</h1>
<br />
<ol>
<li>Create a new Custom Serial Device with the following settings</li>
	<ul>
		<li>Serial Port: Select the applicable Serial Port.It will be named like "COM1 - Generic_F103C8TX..."</li>
		<li>Baudrate: 921600</li>
		<li>Enable RTS: ON</li>
		<li>Enable DTR: ON</li>
		<li>Log Incomming Data: OFF</li>
		<li>Automatic Reconnect: ON</li>
	</ul>
 <br />

![image](https://github.com/user-attachments/assets/d9ef0980-0c84-49ee-aebb-92d579eed422)

<li> To add the Update Messages</li>
	<ul>
		<li>Select "Edit" on the "Update Messages" section</li>
		<li>On the pop up, select "Use Javascript"</li>
		<li>There are two files in this link that contain the Javascript required. - https://github.com/Jordessey/JSSimsport-IFlag/tree/main/SimHub-Custom-Javascript -</li>
		<li>Copy the contents of "Run_Once.js" into the SimHub box "Run Once Javascript Code"</li>
		<li>Copy the contents of "Javascript.js" into the SimHub box "Javascript", If iRacing is not running the "Raw result" should show as "0:0:0:0:0"</li>
		<li>Select "Ok" at the bottom</li>
	</ul> 
 <br />
 
![image](https://github.com/user-attachments/assets/a7f6c3ba-9d85-4630-80db-64962cb07432)

<li>Change the update Frequency</li>
	<ul>
	<li>In the drop down box to the right of the update message, change it from the number present to "Changes Only"</li>li
	</ul>
<br />

![image](https://github.com/user-attachments/assets/cfa0b1c5-974c-4147-a790-8f77f1be45e8)

<br />
<li>Set the disconnect message</li>
	<ul>
		<li>select "EDIT" beside "Message before device Disconnect" and select "use NCALC"</li>
		<li>Paste the following into the "NCALC Formula" box and click "Ok". - '99:99:99:99:99' -</li>
  		<li>Now do the same thing for the "Message after device Connect" and set the value to the following. This will cause the board to flash green briefly after connection. - '2:0:0:0:0' -</li>
	</ul>
<br />

![image](https://github.com/user-attachments/assets/7cf5bf32-5512-4538-9a48-6ceffe2770f2)
</ol>

<br /><br />
<h2>The final Custom Serial Device should look like the following with your applicable Serial Port selected</h2>
<br />

![image](https://github.com/user-attachments/assets/28745963-a3b2-435b-8957-cbe12fb3b735)



  
