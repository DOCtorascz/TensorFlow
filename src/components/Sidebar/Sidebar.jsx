import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/', nameClass: null },
    { title: 'Sales', icon: 'chart-line', path: '/sales', nameClass: 'active' },
    { title: 'Costs', icon: 'chart-column', path: '/costs', nameClass: null },
    { title: 'Payments', icon: 'wallet', path: '/payments', nameClass: null },
    { title: 'Finances', icon: 'chart-pie', path: '/finances', nameClass: null },
    { title: 'Messages', icon: 'envelope', path: '/messages', nameClass: null },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });
        let statusBlock = isOpened ? null : 'sidebarMin 2s forwards';

        return (
            <div className="contaner">
                <div className={containerClassnames} style={{ animation: statusBlock }}>
                    <div className='header__inner'>
                        <a className='header__logo-item' href="#">
                            <img
                                src={logo}
                                alt="TensorFlow logo"
                            />
                            <span className={`header__logo-textContent ${!isOpened ? 'animText' : false}`}>TensorFlow</span>
                        </a>
                        <button className={`header__btn ${!isOpened ? 'animBtn' : false}`} onClick={this.toggleSidebar}>
                            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                        </button>
                    </div>

                    <nav className='nav'>
                        {
                            routes.map((route) => (
                                <div className='nav__list-inner' key={route.title} onClick={() => this.goToRoute(route.path)}>
                                    <button className={`nav__list ${route.nameClass ? 'active' : null}`} href="#">
                                        <FontAwesomeIcon icon={route.icon} />
                                        <span className={`nav__list-name ${!isOpened ? 'animNav' : false}`}>{route.title}</span>
                                    </button>
                                </div>
                            ))
                        }

                        <div className='nav__sub'>
                            {
                                bottomRoutes.map((route) => (
                                    <div className='nav__list-inner' key={route.title} onClick={() => this.goToRoute(route.path)}>
                                        <button className='nav__list' href="#">
                                            <FontAwesomeIcon icon={route.icon} />
                                            <span className={`nav__list-name ${!isOpened ? 'animNav' : false}`}>{route.title}</span>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
