export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number) + ' ت'
	return newNumber
}

export const getUniqueValues = (data,type) => {
	let uniqe = data.map((item)=>item[type])

	if(type === 'colors'){
		uniqe = uniqe.flat();
	}
	return ['all', ...new Set(uniqe)]
}
