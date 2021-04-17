import React from 'react';
import { Link } from 'react-router-dom';


const Dropdown = ({ isOpen, toggle, themeToggler }) => {
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-row-4 text-center items-center'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <div className="ml-8 mt-0">
                <Link className="px-4 " to="/">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd" /></svg>
                </Link>
                <Link className="px-4 " to="/" onClick={themeToggler}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                </Link>

            </div>

        </div >
    )
}

export default Dropdown
