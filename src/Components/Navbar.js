import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth='xl'>
				<Toolbar>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
						Loan Repayment Calculator
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar
