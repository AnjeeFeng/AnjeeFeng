function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var outputValue = "";
    var newInt = 0;
    for(var i = 0; i<UnsignedInt.length; i++){
      newInt=UnsignedIntBaseFrom*parseInt(newInt);
      newInt = newInt + parseInt(UnsignedInt.charAt(i));
    }
    while(newInt!=0){
      outputValue = (newInt%UnsignedIntBaseTo)+outputValue;
      newInt = Math.trunc(newInt/UnsignedIntBaseTo);
    }
  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
