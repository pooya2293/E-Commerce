export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number) + ' ت'
	return newNumber
}

export const getUniqueValues = () => {}
