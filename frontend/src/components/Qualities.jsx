import React from 'react'
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
        <div className="container">
            {
                data[0].ourQualities.map((element) => (
                  <div className="card" key={element.id}>
                    <img src ={element.image} alt={element.title}/>
                        <div className="title">{element.title}</div>
                        <div className="description">{element.description}</div>
                  </div>      
                ))
            }
        </div>

    </section>
  )
}

export default Qualities