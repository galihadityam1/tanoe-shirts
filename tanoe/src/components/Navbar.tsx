import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Whistlist from './Whistlist';

const Navbar = () => {
    return (
        <div className='bg-blue-800 text-center border-b sticky top-0 z-50'>
            <div className='text-white text-xs flex justify-center items-center h-8'>
                <a>Buy More and Make Us Rich{"   "}<FavoriteIcon sx={{ fontSize: 10 }} /></a>
            </div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="font-mono">
                        <a href='/' className="btn btn-ghost text-xl">Tanoe de Attire</a>
                    </div>
                    <div className='flex flex-row justify-center w-80 gap-4 text-xs font-light p-3'>
                        <a href="/collections">Collections</a>
                        <a className='' href=''>New Arrivals</a>
                        <a className='' href=''>Best Sellers</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <a href="/login">
                        <button className="btn btn-ghost btn-circle">
                            <PersonIcon />
                        </button>
                    </a>
                    <Whistlist />

                </div>
            </div>

        </div>
    )
}

export default Navbar