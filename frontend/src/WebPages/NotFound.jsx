import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className='notFound'>
        <div className="container">
            <img src="/notFound.svg" alt="notFound" />
            <h1>LOOKS LIKE YOUR LOST</h1>
            <p>We can't find the page you're looking for</p>
            <Link to={"/"}>
                Back to Home{" "}
                <span>
                    <HiOutlineArrowNarrowRight />
                </span>
            </Link>
        </div>
    </section>

  )
}

export default NotFound 