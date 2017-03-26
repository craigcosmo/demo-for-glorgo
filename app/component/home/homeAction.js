export function ping(payload){
	return{
		type: 'PING',
		payload:payload
	}
}