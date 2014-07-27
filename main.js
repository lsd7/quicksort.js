require(['Chart', 'quicksort'], function(Chart, quicksort) {
	var Chartjs = Chart.noConflict();
	var array = [1, 10, 7, 15, 121];
	console.log("Source: " + array);
	quicksort.sort(array);
	console.log("Sorted: " + array);	
});