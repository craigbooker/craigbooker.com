import React from 'react';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default ({ data }) => (
	<Layout>
		<StyledHero home='true'>
			<Banner></Banner>
		</StyledHero>
	</Layout>
);
