export const formatPrice = (number) => {
	return new Intl.NumberFormat('fa-IR', {currency: 'IRR', style: 'currency'}).format(number * 10)
}

export const getUniqueValues = () => {}
