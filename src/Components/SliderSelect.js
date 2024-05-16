import React from 'react'
import SliderComponent from './Common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
	console.log(data)
	const bank_limit = 100000
	return (
		<>
			<SliderComponent
				label="Pricipal Amount"
				min={10000}
				max={bank_limit}
				defaultValue={data.principalAmount}
				value={data.principalAmount}
				step={1000}
				onChange={(e, value) => setData({
					...data,
					downPayment: value * 0.2,
					loanAmount: value * 0.8,
					principalAmount: value
				})}
				unit="INR"
				amount={data.principalAmount}
			/>
			<SliderComponent
				label="Down Payment"
				min={0}
				max={data.principalAmount}
				defaultValue={data.downPayment}
				value={data.downPayment}
				step={100}
				onChange={(e, value) => setData({
					...data,
					loanAmount: (data.principalAmount - value),
					downPayment: value
				})}
				unit="INR"
				amount={data.downPayment}

			/>
			<SliderComponent
				label="Rest Amount"
				min={0}
				max={data.principalAmount}
				defaultValue={data.loanAmount}
				value={data.loanAmount}
				step={100}
				onChange={(e, value) => setData({
					...data,
					downPayment: (data.principalAmount - value),
					loanAmount: value
				})}
				unit="INR"
				amount={data.loanAmount}
			/>
			<SliderComponent
				label="Interest Rate"
				min={2}
				max={18}
				defaultValue={data.interestRate}
				value={data.interestRate}
				step={0.5}
				onChange={(e, value) => setData({
					...data,
					interestRate: value
				})}
				unit="%"
				amount={data.interestRate}
			/>
		</>
	)
}

export default SliderSelect
