require(['Chart', 'quicksort', 'helpers'], function(Chart, quicksort, helpers) {
	
	var shift = 0;
	var delta = 5000;
	var NUMBER_OF_POINTS = 30;
	var arguments_arr = [];
	var value_arr = [];
	var MIN_INPUT_ARR_NUMBER = 0;
	var MAX_INPUT_ARR_NUMBER = 50;

	var value_arr_1 = [];
	var value_arr_2 = [];

	




	for (var i = 0; i <= NUMBER_OF_POINTS; ++i)
	{
		arguments_arr[i] = shift + i * delta;
	}
	//console.log(arguments_arr);

	for (var i = 0; i <= NUMBER_OF_POINTS; ++i)
	{
		(function() {
			var arr_to_sort = [];
			for (var j = 0; j < arguments_arr[i]; ++j)
			{
				arr_to_sort[j] = helpers.randomInt(MIN_INPUT_ARR_NUMBER, MAX_INPUT_ARR_NUMBER);
			}
			
			var start_time = new Date();
			quicksort.sort(arr_to_sort);
			value_arr[i] = new Date() - start_time;
			

			//TODO clear block

			for (var j = 0; j < arguments_arr[i]; ++j)
			{
				arr_to_sort[j] = helpers.randomInt(MIN_INPUT_ARR_NUMBER, MAX_INPUT_ARR_NUMBER);
			}
			
			var start_time = new Date();
			quicksort.sort(arr_to_sort);
			value_arr_1[i] = new Date() - start_time;

			for (var j = 0; j < arguments_arr[i]; ++j)
			{
				arr_to_sort[j] = helpers.randomInt(MIN_INPUT_ARR_NUMBER, MAX_INPUT_ARR_NUMBER);
			}
			
			var start_time = new Date();
			quicksort.sort(arr_to_sort);
			value_arr_2[i] = new Date() - start_time;

			// end of clear


			console.log("array size: " + arguments_arr[i] + 
				"    sort time: " + value_arr[i]);
		})();
	}



	var lineChartData = {
		labels : arguments_arr,
		datasets : [
		{
			label: "My First dataset",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : value_arr
		}

		,

		{
			label: "values 1",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : value_arr_1
		}

				,

		{
			label: "values 1",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : value_arr_2
		}

		]

	}

	var ctx = document.getElementById("myChart").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData);

	



});