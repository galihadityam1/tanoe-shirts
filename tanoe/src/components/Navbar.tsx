"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';
// import { logout } from '@/actions/user';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';


const Navbar = () => {
    const router = useRouter()
    const cookies = new Cookies();
    async function Login() {
        let token = cookies.get('Authorization');

        if (token) {
            return Swal.fire({
                title: 'Sudah Login',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        router.push('/login')
    }

    async function logout() {
        let token = cookies.get("Authorization")
        if (!token) {
            return Swal.fire({
                title: 'Anda Belum Login',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        cookies.remove("Authorization");
        router.push("/login")
    }

    async function wishlist() {
        let token = cookies.get("Authorization")
        if (!token) {
            return Swal.fire({
                title: 'Anda Belum Login',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        router.push("/login")
    }
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
                    <button className="btn btn-ghost btn-circle" onClick={() => wishlist()}>
                        <ShoppingBagIcon />
                    </button>
                    <button className="btn btn-ghost btn-circle" onClick={() => Login()}>
                        <PersonIcon />
                    </button>
                    <button className="btn btn-ghost btn-circle" onClick={() => logout()}>
                        <LogoutIcon />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar