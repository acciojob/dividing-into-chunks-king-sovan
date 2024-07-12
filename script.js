const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let currentSubarr = [];
	let currentSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (currentSum + arr[i] > n) {
			result.push(currentSubarr);
			currentSubarr = [arr[i]];
			currentSum = arr[i];
		}
		else{
			currentSubarr.push(arr[i]);
			currentSum += arr[i];
		}
	}
	if (currentSubarr.length > 0) {
		result.push(currentSubarr);
	}

	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
