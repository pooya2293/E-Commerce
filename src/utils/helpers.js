export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR',{ maximumSignificantDigits: 3 }).format(number) + ' تومان'

	console.log(newNumber)//۴۰٬۰۰۰ تومان  //۶۰٬۰۰۰ تومان
	return newNumber
}

export const getUniqueValues = () => {}
