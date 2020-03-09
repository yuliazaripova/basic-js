module.exports = function getSeason(date) {
	if (typeof date == 'undefined') return 'Unable to determine the time of year!';
	if (date.toString() == 'Invalid Date' || isNaN(date.valueOf())) {
		throw new Error();
	}
	 
        
    let month = date.getMonth();
    switch(month) {
    	case 11:
    	case 0:
    	case 1:
    		return "winter";
    	case 2:
    	case 3:
    	case 4:
    		return "spring";
    	case 5:
    	case 6:
    	case 7:
    		return "summer";
    	case 8:
    	case 9:
    	case 10:
    		return "autumn";
    }
};
