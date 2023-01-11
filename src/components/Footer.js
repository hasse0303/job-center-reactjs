import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='pt-10 pb-5 border-t-4 border-teal-500 bg-gray-900 text-white'>
      <div className="flex flex-col justify-between 2xl:w-8/12 2xl:mx-auto">
        <div className="grid md:grid-row-1 md:grid-cols-10  md:gap-8 px-10 2xl:px-0">
          <div className="col-span-3">
            <h3 className="capitalize text-bold text-4xl pb-6 tracking-wider font-serif">
              Job <span className="text-teal-500">Center</span>
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="capitalize font-bold text-2xl pb-4 tracking-wider">Useful Link</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>How it works</li>
              <li>Easy to apply</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="capitalize font-bold text-2xl pb-4 tracking-wider">Quick Search</h3>
            <ul>
              <li>Search</li>
              <li>Popular</li>
              <li>New added</li>
              <li>Most Relevant</li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="capitalize font-bold text-2xl pb-4 tracking-wider">Join our team</h3>
            <p> We write rarely, but only the best content.</p>
            <div className="flex py-3">
              <input id="email" name="email" placeholder="Enter your email ...."
               className="w-full py-1 px-2 border rounded-l focus:outline-none text-gray-900 placeholder:text-sm"
              ></input>
              <label htmlFor="email" className="bg-teal-500 text-white rounded-r px-2 py-2 cursor-pointer flex justify-center item-center">Join</label>
            </div>
            <p className="text-gray-900 text-xs tracking-wider">We'll never share your details.</p>
          </div>
        </div>
        <div className='flex justify-between items-end mt-20 px-10 2xl:px-0'>
          <div> © 2022 All right reserve</div>
          <div>
            <ul className='flex items-center space-x-3 text-sm'>
              <li>
                <FontAwesomeIcon icon={faFacebook} className="bg-gray-900 text-white cursor-pointer"></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="bg-gray-900 text-white cursor-pointer"></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} className="bg-gray-900 text-white cursor-pointer"></FontAwesomeIcon>
              </li>
              <li>
                <FontAwesomeIcon icon={faTiktok} className="bg-gray-900 text-white cursor-pointer"></FontAwesomeIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
