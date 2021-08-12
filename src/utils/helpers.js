export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number) + ' ت'

	console.log(newNumber)
	return newNumber
}

export const getUniqueValues = () => {}
