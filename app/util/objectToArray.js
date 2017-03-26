export default function (data){
	let newData = []
	if (data.created) {
		newData.push(data)
	}else{
		for (let i in data){
			data[i].id = i
			newData.push(data[i])
		}
	}
	return newData
}