module.exports = function toReadable (number) {
  let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let b = [
'eleven', 'twelve', 'thirteen', 
'fourteen', 'fifteen', 'sixteen', 
'seventeen', 'eighteen', 'nineteen'
];

let c = [
'ten', 'twenty', 'thirty', 
'forty', 'fifty', 'sixty', 
'seventy', 'eighty', 'ninety'
];

let d = [
'one hundred', 'two hundred', 'three hundred', 
'four hundred', 'five hundred', 'six hundred', 
'seven hundred', 'eight hundred', 'nine hundred'
];


	if(number == 0) return 'zero';

	let len = number.toString().length;
	
	switch(len) {
	  case 1:  
	    return getUnit(number);
	    break;

	  case 2:  
	    return func2(number);
	    break;

	  default:
	    case 3:
	    return func3(number);
	    break;
	}



function getUnit(number){
	return a[number -1];
}

function func2(number){
	let numStr = number.toString();
	let num1 = '';
	let num2 = '';

	let numChunkOne = numStr[0];
	let numChunkTwo = numStr[1];


	if(numChunkOne == 1 && numChunkTwo != 0){
		return func2_1(numChunkTwo);
	} 

	else if(numChunkTwo == 0){
		return func2_2(numChunkOne);
	} 

	else{
		num1 = func2_2(numChunkOne);
		num2 = getUnit(numChunkTwo);

		return `${num1} ${num2}`;
	}
}

	function func2_1(num){
		return b[num -1];
	}


	function func2_2(num){
		return c[num-1];
	}



function func3(number){
	let numStr = number.toString();

	let numChunkOne = numStr[0];
	let numChunkTwo = numStr[1];
	let numChunkThree = numStr[2];

	let num1 = func3_1(numChunkOne);
	let num2 = '';
	
	// 100, 200, 300...
	if(numChunkTwo == 0 && numChunkThree == 0)
	{
		return func3_1(numChunkOne);
	}

	// 101, 102, 103, 104...
	else if(numChunkTwo == 0)
	{
		num2 = getUnit(numChunkThree);
		return `${num1} ${num2}`;
	}

	// 111, 112, 113, 114...
	else if(numChunkTwo == 1 && numChunkThree != 0)
	{
		num2 = func2_1(numChunkThree);
		return `${num1} ${num2}`;
	}

	// 110, 120, 130, 140
	else if(numChunkTwo > 1 && numChunkThree == 0)
	{

		num2 = func2(numChunkTwo+numChunkThree);
		return `${num1} ${num2}`;
	}

	// всё остальное
	else
	{
		num2 = func2(numChunkTwo + numChunkThree);
		return `${num1} ${num2}`;
	}

}

function func3_1(num){
	return d[num-1];
}


}
