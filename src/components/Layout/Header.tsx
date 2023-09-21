import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className='bg-gray-50'>
                <div className='flex p-4 items-center justify-between px-40'>
                    <Link href={'/'}>
                        <h1 className='font-poppins font-extrabold text-lg text-gray-800'>VAL 101</h1>
                    </Link>
                    <div className='flex gap-10'>
                        <Link href={'/'}>
                            <span className='font-poppins font-semibold text-sm text-gray-700'>Home</span>
                        </Link>
                        <Link href={'/map'}>
                            <span className='font-poppins font-semibold text-sm text-gray-700'>Maps</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}