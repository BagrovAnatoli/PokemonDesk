import React from 'react';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

import s from './Home.module.scss';


const HomePage = () => {
	return (
		<div className={s.root}>
			<Header />
			<Layout className={s.contentWrap}>
				<div className={s.contentText}>
					<h1>
						<Heading hType='h1'>Find</Heading><Heading hType='h3'> all your favorite </Heading><Heading hType='h1'>Pokemon</Heading>
					</h1>
					<Heading hType='paragraph'><p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p></Heading>
					<Button
						onClick={(event)=>console.log('Click Button!')}
						width='wide'
						color='yellow'
						size='small'
					>
						See pokemons
					</Button>
				</div>
				<div className={s.contentParallax}>
					<Parallax />
				</div>
			</Layout>
		</div>
	);
};

export default HomePage;