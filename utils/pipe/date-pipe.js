import moment from 'moment';

class DatePipe {
	constructor(arg) {

	}

	dateFilter(date, format = 'YYYY-MM-DD HH:mm:ss') {
		if (!date) {
			throw new Error(`必须传递日期对象!!!`);
		}
		const formatFilterStr = moment(date).format(format);
		return formatFilterStr;
	}
}
const datePipe = new DatePipe();
export default datePipe;
