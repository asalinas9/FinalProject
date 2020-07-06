import React from 'react';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';
import NavBarLogOut from "./NavBarLogout";
import MapsSearch from "./Locations";
import Footer from "./Footer"

const Content = () => {
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
		<Grid container spacing={2}>
			
			{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
		</Grid>
		<div style={{backgroundColor: "white", width: "30%", height: "25%", margin: "0 auto"}}>
			<div style={{width: "95%", height: "auto", margin: "0 auto"}}>
				<p>Don't see what you're looking for? Try searching around your area!</p>
				<MapsSearch />
			</div>
		</div>
		<div style={{position: "fixed", height: "40%", bottom: "-1"}}>
			<Footer />
		</div>
		</div>
	);
};

export default Content;
