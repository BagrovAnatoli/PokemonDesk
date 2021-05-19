import React from 'react';
import Button from "../../components/Button";
import TeamRocket from "./assets/TeamRocket.png";
import {navigate} from 'hookrouter';
import {LinkEnum} from '../../routes';

import s from './NotFound.module.scss';


const NotFoundPage = () => {
	return (
		<div className={s.root}>
			<div className={s.wrap}>
				<div className={s.text}>
					404
				</div>
				<div className={s.layer}>
					<img src={TeamRocket} alt="TeamRocket" />
					<div className={s.subtitle}>
						<span>The rocket Team</span> has won this time.
					</div>
				</div>
				<Button
					onClick={() => navigate(LinkEnum.HOME)}
					width='narrow'
					color='yellow'
					size='normal'
				>
					Return
				</Button>
			</div>
		</div>
	);
};

export default NotFoundPage;