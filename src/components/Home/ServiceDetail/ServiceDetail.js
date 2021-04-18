import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = ({ service }) => {
    const { image } = service;
    const history = useHistory();

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div style={{cursor: 'pointer'}} className="col-xs-12 col-sm-12 col-md-4 text-center" onClick={() => history.push('/dashboard/_id')}>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.to(trans) }}
                >
                    
                <div className="card mt-5" style={{ width: '18rem' }}>
                    <img style={{ height: '200px', width: '', padding: '12px 60px' }} src={`data:image/png;base64,${image.img}`} className="card-img-top bg-primary" alt="..." />
                    <div className="card-body">
                        <h5 style={{ color: '#101010' }} className="card-title">{service.title}</h5>
                        <h5 style={{ color: '#101010' }} className="card-title">{service.price}</h5>
                        <p style={{ color: '#444444' }} className="card-text">{service.description}</p>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default ServiceDetail;