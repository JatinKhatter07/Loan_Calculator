import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
	//const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
	const { principalAmount, loanAmount, loanTerm, interestRate } = data;
	const totalLoanMonths = loanTerm * 12;
	const interestPerMonth = interestRate / 100 / 12;
	const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);

	const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

	const pieChartData = {
		labels: ['Principle', 'Intrest'],
		datasets: [
			{
				label: 'Ratio of Principle and Intrest',
				data: [principalAmount, totalInterestGenerated],
				backgroundColor: [
					'rgba(153, 255, 153,0.1)',
					'rgba(77, 255, 255,1)',
				],
				borderColor: [
					'rgba(153, 255, 153,1)',
					'rgba(77, 255, 255,1)',
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<Stack gap={3}>
			<Typography textAlign='center' variant='h5'>
				Monthly Payment: INR {monthlyPayment.toFixed(2)}
			</Typography>
			<Stack direction='row' justifyContent='center'>
				<div>
					<Pie data={pieChartData} />
				</div>
			</Stack>

		</Stack>
	)
}

export default Result
