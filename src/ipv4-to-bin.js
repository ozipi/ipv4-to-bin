var tobinary = require('to-binary');

function ipv4ToBin(ip) {
	var ipSplit = ip.split(".");
	var result = [];
	for (var i = 0; i < ipSplit.length; i++) {
		var binarySegment = tobinary(ipSplit[i]);
		result.push(binarySegment);
	}

	return result.join(".");
}

module.exports = ipv4ToBin;
