let Left = $prop("SpotterCarLeft");
let Right = $prop("SpotterCarRight");


if ($prop("GameRawData.Telemetry.WeatherDeclaredWet") == true){
	Wet = 1;
} else {
	Wet = 0;
}

if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Isblack") || $prop("GameRawData.Telemetry.SessionFlagsDetails.Isdisqualify")){
	BLKDSQ = 1;
}else{
	BLKDSQ = 0;
	}

if ($prop('Flag_Blue') == true){
	Flag = 8;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.IscautionWaving") == true){
	Flag = 6;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Iscaution") == true){
	Flag = 7;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Isred") == true){
	Flag = 5;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Iswhite") == true){
	Flag = 4;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Ischeckered") == true){
	Flag = 1;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Isrepair") == true){
	Flag = 3;
} else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.Isgreen") == true){
	Flag = 2;
}else if ($prop("GameRawData.Telemetry.SessionFlagsDetails.IsstartSet") == true){
	Flag = 9;
}else {
	Flag = 0
}




if ($prop("DataCorePlugin.GameRunning") == false){
	Flag = 0;
	Wet = 0;
	Left = 0;
	Right = 0;
	BLKDSQ = 0;

}


let output = [Flag, Wet, Left, Right,BLKDSQ].join(":")
return output;
