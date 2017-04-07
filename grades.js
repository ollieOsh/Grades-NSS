var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87],
	numA = 0,
	numB = 0,
	numC = 0,
	numD = 0,
	numF = 0;

function numEach(array){
	for(i = 0;i < array.length;i++){
		var s = array[i];

		if(s < 61){
			numF++;
		}else if(s < 71){
			numD++;
		}else if(s < 81){
			numC++
		}else if(s < 91){
			numB++;
		}else{
			numA++;
		}
	}
	console.log("How many of each grade? A's: " + numA, ", B's: " + numB, ", C's: " + numC, ", D's: " + numD, ", F's: " + numF)
}

function lowGrade(array){
	var low = array.sort(function(a, b) {return a - b});

	console.log("What is the lowest grade? " + low[0]);
}

function hiGrade(array){
	var hi = array.sort(function(a, b) {return b - a});

	console.log("What is the highest grade? " + hi[0]);
}

numEach(scores);
lowGrade(scores);
hiGrade(scores);