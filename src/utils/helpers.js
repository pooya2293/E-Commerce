export const formatPrice = (number) => {
	const newNumber = Intl.NumberFormat('fa-IR').format(number) + ' تومان'

	console.log(newNumber)//۵۹٬۹۹۹ تومان //۳۹٬۹۹۹ تومان
	return newNumber
}

export const getUniqueValues = () => {}
