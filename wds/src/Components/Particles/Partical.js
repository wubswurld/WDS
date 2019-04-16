import Particles from 'react-particles-js';
import React, { Component } from 'react';

class Particalexport extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
				<a href="https://www.facebook.com/">
                <Particles height="120px" width="120px"    params={{
	    "fps_limit": 38,
	    "particles": {
	        "number": {
	            "value": 150,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 0.5,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 2,
	        "type": "inline",
	        "move": {
	            "radius": 1
	        },
	        "url": "./facebook.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 4,
	                "distance": 40
	            }
	        }
	    }
	}}
                 />
			</a>
            </div>
        )
    }
}

export default Particalexport;