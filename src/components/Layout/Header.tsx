import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className='container bg-gray-800 max-w-lg shadow-2xl'>
                <div className='flex p-4 items-center justify-between'>
                    <Link href={'/'}>
                        <h1 className='font-poppins font-extrabold text-lg text-gray-300'>Val-101</h1>
                    </Link>
                    <div className='flex gap-2'>
                        <Link href={'/'}>
                            <div className='rounded-2xl bg-gray-900 px-4 py-1 shadow-2xl'>
                                <span className='font-poppins font-semibold text-sm text-gray-300'>Home</span>
                            </div>
                        </Link>
                        <Link href={'/agent'}>
                            <div className='rounded-2xl bg-gray-900 px-4 py-1 shadow-2xl'>
                                <span className='font-poppins font-semibold text-sm text-gray-300'>Agents</span>
                            </div>
                        </Link>
                        <Link href={'/map'}>
                            <div className='rounded-2xl bg-gray-900 px-4 py-1 shadow-2xl'>
                                <span className='font-poppins font-semibold text-sm text-gray-300'>Maps</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}