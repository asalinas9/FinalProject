import React from 'react';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';
import NavBarLogOut from './NavBarLogout';
import MapsSearch from './Locations';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles({
	mapSearch: {
		background: 'white',
		opacity: '0.6',
		fontWeight: '500',
		fontStyle: 'oblique',
		alignItems: 'center',
	},
	paragraph: {
		color: 'white',
		alignItems: 'center',
		fontWeight: '500',
		width: '95%',
	},
});

const theme = createMuiTheme({
	overrides: {
		// Style sheet name ⚛️}
		MuiButton: {
			// Name of the rule
			text: {
				// Some CSS
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				borderRadius: 3,
				border: 0,
				color: 'white',
			},
		},
	},
});

const Content = () => {
	const theme = createMuiTheme();
	const classes = useStyles();
	const landSCCard = (lansCardObj) => {
		return (
			<Grid item xs={3} sm={3}>
				<LandSCard {...lansCardObj} />
			</Grid>
		);
	};
	return (
		<div>
			<NavBarLogOut />
			<ThemeProvider theme={theme}>
				<MapsSearch></MapsSearch>
			</ThemeProvider>
			{/* <MapsSearch className={classes.mapSearch} align="center" /> */}

			<div style={{backgroundColor: 'white', width: '30%', height: '25%', margin: '0 auto'}}></div>
			{/* <div style={{width: '95%', height: 'auto', margin: '0 auto'}}> */}
			<Typography className={classes.paragraph} variant="h6" display="block" paragraph>
				<Box fontFamily="Monospace">Don't see what you're looking for? Try searching around your area!</Box>
			</Typography>
			<Grid container spacing={2}>
				{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
			</Grid>
			<div style={{backgroundColor: 'white', width: '30%', height: '25%', margin: '0 auto'}}>
				<div style={{width: '95%', height: 'auto', margin: '0 auto'}}>
					<p>Don't see what you're looking for? Try searching around your area!</p>
					{/* <MapsSearch /> */}
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Content;
