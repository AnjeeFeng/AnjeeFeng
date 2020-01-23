
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);


  if(floatToConvert<=0){
    var sign = true;
    var absNum = ""+Math.abs(floatToConvert);
  }else{
    var sign = false;
    var absNum = ""+floatToConvert;
  }

  var i = 0;
  var intNum = "";
  var decNum = "";

  while(absNum.charAt(i)!="."&&i<absNum.length&&i<=23){
    intNum = intNum +=absNum.charAt(i);
    i++;
  }

  while(i<absNum.length){
    decNum = decNum +absNum.charAt(i);
    i++;
  }

  var intMantissa = "";
  var decMantissa = "";

  while(intNum!=0){
    intMantissa = (intNum%2)+intMantissa;
    intNum = Math.trunc(intNum/2);
  }

  var temp = intMantissa.length -1;

  var exponent = "";

  while(temp!=0){
    exponent = (temp%2)+exponent;
    temp = Math.trunc(temp/2);
  }

  while(exponent.length<8){
    exponent = "0"+exponent;
  }

  var i = intMantissa.length;

  while(i<=23){
    decNum = decNum *2;
    if(decNum>=1){
      decMantissa = decMantissa + "1";
      decNum = decNum - 1;
    }else{
      decMantissa = decMantissa + "0";
    }
    i++;
  }


  var mantissa = ""+intMantissa+decMantissa;


  if(sign){
    var unaddedTwosComplement = "";
    for(var i = 0; i<mantissa.length; i++){
      if(mantissa.charAt(i) == 1){
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
    mantissa = outputValueTwosComplement;
  }

  if(sign){
    var output32BitScientificNotation = ""+mantissa + exponent +"1";
  }else{
    var output32BitScientificNotation = ""+mantissa+exponent + "0";
  }

  //var output32BitScientificNotation = "10100011001100001000010100101010";


  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
