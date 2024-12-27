import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                        <p>We don't make mistakes - just tasty recipes</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit animi, incidunt ullam nulla vero! Debitis in blanditiis fugit maiores mollitia nesciunt, autem quo aliquam possimus itaque nam iusto, quae explicabo nemo. Est sint nulla nihil obcaecati voluptatem voluptatibus reiciendis architecto, quaerat, modi sit, assumenda commodi et eos corporis ipsum!
                </p>
                <Link to= {"/"}>Explore Menu
                <span><HiOutlineArrowNarrowRight/></span>
                </Link>       
            </div>
            <div className="banner">
                <img src ="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About