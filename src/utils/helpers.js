export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number) + ' ت'
	return newNumber
}

export const getUniqueValues = (data,type) => {
	let uniqe = data.map((item)=>item[type])
	console.log(uniqe) //seperate all type of data in 3 difrent array : category,company,color
}
