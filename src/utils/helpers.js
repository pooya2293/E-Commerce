export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number + 1) + ' تومان'

	console.log(newNumber)//۴۰٬۰۰۰ تومان  //۶۰٬۰۰۰ تومان
	return newNumber
}

export const getUniqueValues = () => {}
