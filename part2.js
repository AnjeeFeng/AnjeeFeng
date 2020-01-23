function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    if(SignedDecimalInt<0){
      var sign = true;
      var absInt = Math.abs(SignedDecimalInt);
    }else{
      var sign = false;
      var absInt = SignedDecimalInt
    }

    var outputValue = "";
    while(absInt!=0){
      outputValue = (absInt%2)+outputValue;
      absInt = Math.trunc(absInt/2);
    }

    outputValue = "0"+outputValue;

    var unaddedTwosComplement = "";
    for(var i = 0; i<outputValue.length; i++){
      if(outputValue.charAt(i) == 1){
        unaddedTwosComplement = unaddedTwosComplement + "0";
      }else{
        unaddedTwosComplement = unaddedTwosComplement + "1";
      }
    }

    var regroup = true;
    var outputValueTwosComplement = ""
    for(var i = unaddedTwosComplement.length-1; i>=0; i--){
      if(regroup){
        if(unaddedTwosComplement.charAt(i)=="0"){
          outputValueTwosComplement = "1"+outputValueTwosComplement;
          regroup = false;
        }else{
          outputValueTwosComplement = "0"+outputValueTwosComplement;
        }
      }else{
        outputValueTwosComplement = unaddedTwosComplement.charAt(i)+outputValueTwosComplement;
      }
    }

    // Show the output on the screen
    if(sign){
    FormatAndShowOutput([outputValueTwosComplement, outputValue, SignedDecimalInt], 2);
  }else{

    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
  }
}
