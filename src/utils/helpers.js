export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('en-US',{
		style: 'currency',
		currency: 'USD',
		}).format(number / 100)

	console.log(newNumber)//$599.99 //$399.99
	return newNumber
}

export const getUniqueValues = () => {}
