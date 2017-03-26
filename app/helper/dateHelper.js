import moment from 'moment'

export function secondsToDate(time){
	return moment.unix(time).format('DD MMMM YYYY')
}

export function different(timeInSeconds){
	// console.log('timeInSeconds', timeInSeconds)
	// get total seconds between the times

	let delta = Math.abs(timeInSeconds - Math.round(new Date().getTime()/1000) ) 

	// calculate (and subtract) whole days
	let days = Math.floor(delta / 86400)
	delta -= days * 86400

	// calculate (and subtract) whole hours
	let hours = Math.floor(delta / 3600) % 24
	delta -= hours * 3600

	// calculate (and subtract) whole minutes
	let minutes = Math.floor(delta / 60) % 60
	delta -= minutes * 60

	// what's left is seconds
	let seconds = delta % 60  // in theory the modulus is not required


	let go = days + ' ' + hours + ' ' + minutes + ' ' + seconds
	// console.log('a',go)
	if (days > 1) {
		return days + ' days'
	}else if(hours > 1){
		return hours + ' hours'
	}else if(minutes > 1){
		return minutes + ' minutes'
	}else if(seconds) {
		return seconds + ' seconds'
	}else if (seconds === 1){
		return '1 second'
	}else {
		return '1 second'
	}
	
}