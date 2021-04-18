import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Testimonial = ({ testimonial }) => {
    const { detail, name, designation, img } = testimonial;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col-md-4">
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.to(trans) }}
            >
                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img style={{ padding: '10px' }} src={img} alt="..." />
                            <div>
                                <h6 style={{ padding: '5px' }} className="text-primary">{name}</h6>
                                <p style={{ color: '#444444', padding: '10px' }} className="m-0">{designation}</p>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p style={{ color: '#444444' }} class="card-text">{detail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default Testimonial;