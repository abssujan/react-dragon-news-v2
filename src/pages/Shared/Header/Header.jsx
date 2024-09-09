import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' w-full  mt-10 text-center space-y-2'>
           <div className='flex items-center justify-center'>
           <img  src={logo} alt="" />
           </div>
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;