import Link from 'next/link';

const NavigationBar = () => {
    return (
        <nav className='bg-gray-800 p-4 text-white'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href='/' className='text-xl font-bold'>
                    Your App Name
                </Link>
                <div className='space-x-4'>
                    <Link href='/' className='hover:text-gray-300'>
                        Home
                    </Link>
                    <Link href='/about' className='hover:text-gray-300'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
