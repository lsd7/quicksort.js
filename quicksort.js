define("quicksort", ["helpers"], function(helpers) {
	var iteration = 0;   // TODO: needs to be cleaned

	var _quicksort = function(source_arr){
		'use strict';
		var n = source_arr.length;
		_partition(source_arr, 0, n - 1);
		return source_arr;
	}

	var _partition = function(source_arr, start, end)
	{
		if (start >= end)
		{
			return;
		}

		var pivot_index = helpers.randomInt(start, end), 
			i, j;
		

		//helpers.swap(source_arr, start, pivot_index);
		var temp = source_arr[start];
		source_arr[start] = source_arr[pivot_index];
		source_arr[pivot_index] = temp;

		var pivot = start;
		j = start + 1;
		i = start;

		//TODO: clean
		console.log("Iteration: " + iteration++);
		console.log("start = " + start);
		console.log("end = " + end);
		console.log("pivot_index = " + pivot_index);
		console.log("i = " + i);
		console.log("j = " + j);
		console.log("Intermediate = " + source_arr);
		console.log();




		while ( j <= end)
		{
			if (source_arr[j] < source_arr[pivot])
			{
				helpers.swap(source_arr, i, j);
				++i;
			}
			++j;	
		}

		//helpers.swap(source_arr, pivot, i);
		var temp = source_arr[pivot];
		source_arr[pivot] = source_arr[i];
		source_arr[i] = temp;

		console.log("Intermediate 2 = " + source_arr);
		console.log("start = " + start);
		console.log("end = " + end);
		console.log("i = " + i);
		console.log("j = " + j);
		console.log("\n\n\n");

		_partition(source_arr, start, i-1);
		_partition(source_arr, i+1, end);

	}

	return {
		sort: _quicksort
	};
});
