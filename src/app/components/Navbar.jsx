'use client';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'
import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { logo, menu, close } from '../../assets/index.js'

function randLabel() {

    const labels = [
        "ML Dev",
        "Biohacker",
        "Game Dev",
        "Web Dev",
        "Tutor",
    ];


    return(
        labels[Math.floor(Math.random() * labels.length)]
    );
}


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
        className={`${
            styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
    }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
            to="/"
            className="flex items-center gap-2 "
            onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
            }}
        >
            
            <Image src ={logo} alt = "logo" className='w-9 h-9 object-contain' width={50} height={50}/>
            
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                Jaden &nbsp;
                <span className='sm:block hidden'> | {randLabel()}</span>
            </p>
        </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                  >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
              ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div>
            <Image
                src={toggle ? close: menu}
                alt='menu'
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
                fill={true}
            />
            </div>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 
            right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                <ul className="list-none flex justify-end items-start flex-full">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar