import React, {useState} from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import github from '../img/github-icon.svg';
import Logo from './Logo';

const Navbar = () =>  {
	const [isOpen, setNav] = useState(false)
	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}
	console.log(isOpen)

/* 	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
		};
	} */

	// Only close nav if it is open
	//handleLinkClick = () => this.state.active;

	/* toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active',
					  })
					: this.setState({
							navBarActiveClass: '',
					  });
			}
		);
	}; */

	//render() {
	return (
		<nav className={styles.navbar}>
				<div className={styles.navCenter}>
					<div className={styles.navHeader}>
						<img src={logo} alt="Craig Booker logo" />
						<button type="button" className={styles.logoBtn} onClick={toggleNav}>
							<FaAlignRight className={styles.logoIcon} />
						</button>
					</div>
					<ul
          	className={
            	isOpen
              	? `${styles.navLinks} ${styles.showNav}`
              	: `${styles.navLinks}`
          	}
        	>
					  {links.map((item, index) => {
            	return (
              	<li key={index}>
                	<AniLink fade to={item.path}>{item.text}</AniLink>
              	</li>
            	)
          	})}	
					</ul>

						<Link to='/' className='navbar-item-logo' title='LogoText'>
							<strong className='navbar-item-logo'>Craig Booker</strong>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id='navMenu'
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className='navbar-end has-text-centered'>
							<Link
								className='navbar-item'
								to='/about'
								alt='First time visitor...Start Here'
							>
								Start Here
							</Link>
							<Link className='navbar-item' to='/blog'>
								Blog
							</Link>
							<Link className='navbar-item' to='/apps'>
								Apps
							</Link>
							<Link className='navbar-item' to='/portfolio'>
								Projects
							</Link>
							<Link className='navbar-item' to='/contact'>
								Contact
							</Link>
							<a
								className='navbar-item'
								href='https://github.com/craigbooker/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='icon'>
									<img src={github} alt='Github' />
								</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
