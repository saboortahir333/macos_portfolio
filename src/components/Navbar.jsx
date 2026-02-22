import React from 'react'
import { navIcons, navLinks } from '#constants'
import dayjs from 'dayjs'


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold text-white'>Saboor's Portfolio</p>
                <ul className="flex gap-4">
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p className="text-white hover:text-gray-300 cursor-pointer">{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="flex gap-4">
                    {navIcons.map((icon) => (
                        <li key={icon.id}>
                            <img className="icon-hover w-6 h-6" src={icon.img} alt={icon.id} />
                        </li>
                    ))}
                </ul>

                <time datetime="">{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};

export default Navbar