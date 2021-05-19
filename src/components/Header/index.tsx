import React from 'react';
import {A, usePath} from 'hookrouter';
import cn from 'classnames';

import s from './Header.module.scss';

import {ReactComponent as PokemonLogoSvg} from './assets/Logo.svg';
import Layout from '../Layout';
import {GENERAL_MENU} from '../../routes';

interface IMenu {
	title: string;
	link: string;
}


const Header = () => {
	const path = usePath();
	return (
		<div className={s.root}>
			<Layout>
				<div className={s.wrap}>
					<div className={s.pokemonLogo}>
						<PokemonLogoSvg />
					</div>
					<div className={s.menuWrap}>
						{
							GENERAL_MENU.map(({title, link}, index) => (
								<A
								key={title}
								href={link}
								className={cn(s.menuLink, {
									[s.activeLink]: link === path,
								})}>
									{ title }
								</A>
							))
						}
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Header;