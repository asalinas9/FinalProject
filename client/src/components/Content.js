import React from 'react';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';
import NavBarLogOut from './NavBarLogout';
import MapsSearch from './Locations';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import Footer from "./Footer"
import MapContainer from './MapContainer';

const useStyles = makeStyles({
	mapSearches: {
		alignItems: 'center',
		opacity: '0.7',
	},
	paragraph: {
		color: 'white',
		alignItems: 'center',
		fontWeight: '900',
		width: '80%',
		margin: '0 auto',
		height: 'auto',
	},
});

const Content = () => {
	const classes = useStyles();
	const landSCCard = (lansCardObj) => {
		return (
			<Grid item xs={3} sm={3} style={{padding: 15}}>
				<LandSCard {...lansCardObj} />
			</Grid>
		);
	};
	return (
		<div>
			<NavBarLogOut />

			{/* <MapsSearch className={classes.mapSearches} /> */}
			{/* <div style={{backgroundColor: 'white', width: '30%', height: '25%', margin: '0 auto'}}></div> */}
			{/* <div style={{width: '95%', height: 'auto', margin: '0 auto'}}> */}

			<Grid container spacing={2}>
				{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
			</Grid>
			{/* <div style={{backgroundColor: 'white', width: '30%', height: '25%', margin: '0 auto'}}> */}
			<Typography className={classes.paragraph} variant="h5" display="block" paragraph>
				<Box fontFamily="Monospace">Don't see what you're looking for? Try searching around your area!</Box>
			</Typography>
			<MapContainer></MapContainer>
			<MapsSearch className={classes.mapSearches} />
		</div>
		// </div>

		// </div>
	);
};

export default Content;
