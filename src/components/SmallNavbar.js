import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function SmallNavbar() {
    return (
        <div className='flex items-center shadow-sm bg-white border-b py-2'>
            <div className='flex justify-between w-full items-center px-10 font-serif 2xl:px-0 2xl:w-8/12 2xl:mx-auto'>
                <div className='flex items-center space-x-3 text-gray-900 font-medium text-sm'>
                    <Link to='/' className='focus:outline-none'>Home</Link>
                    <p>|</p>
                    <Link to='#about' className='focus:outline-none'>About</Link>
                    <p>|</p>
                    <Link to='/contact' className='focus:outline-none'>Contact</Link>
                </div>
                <div>
                    <ul className='flex items-center space-x-2'>
                        <li className='social group bg-blue-500'>
                            <FontAwesomeIcon icon={faFacebook} className="social-link"/>
                        </li>
                        <li className=' social group bg-red-500'>
                            <FontAwesomeIcon icon={faYoutube} className="social-link"/>
                        </li>
                        <li className='social group bg-sky-500'>
                            <FontAwesomeIcon icon={faTwitter} className="social-link"/>
                        </li>
                        <li className=' social group bg-gray-900'>
                            <FontAwesomeIcon icon={faTiktok} className="social-link"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SmallNavbar;