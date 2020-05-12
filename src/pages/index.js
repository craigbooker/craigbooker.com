import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default ({ data }) => (
	<Layout>
		<StyledHero home='true'>
			<Banner
				title='Hello & welcome!'
				info='My name is Craig Booker. I am a Writer. If you are new here click or tap on Start Here to learn more about me.'
			>
				<AniLink fade to='/about' className='btn-white'>
					Start Here
				</AniLink>
			</Banner>
		</StyledHero>
	</Layout>
);
