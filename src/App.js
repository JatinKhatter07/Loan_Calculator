import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";


function App() {
	const [data, setData] = useState({
		principalAmount: 10000,
		downPayment: 10000 * 0.2,
		loanAmount: 10000 * 0.8,
		loanTerm: 5,
		interestRate: 5,
	})
	return (
		<div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
			<div style={{width:"1000px"}}>
			<Navbar />
			<Container maxWidth='xl' sx={{ marginTop: 4 }}>
				<Grid container spacing={5} alignItems="center">
					<Grid item xs={12} md={6}>
						<SliderSelect data={data} setData={setData} />
						<TenureSelect data={data} setData={setData} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Result data={data} />
					</Grid>
				</Grid>
			</Container>
		</div>
		</div>
	);
}

export default App;
