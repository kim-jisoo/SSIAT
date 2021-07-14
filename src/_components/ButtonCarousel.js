import React, {Component} from 'react';
import './ButtonCarousel.css';
import {ButtonItems} from "./ButtonItems";

class ButtonCarousel extends Component {

    render() {
        const responsive = {
            
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
          const fakerData = Array(12)
          .fill(0)
          .map((item, index) => {
            return {
              image: ButtonItems[index],
              headline: "w3js -> web front-end studio",
            };
          });

        return ( 
            // <div >
            //     <ScrollMenu
            //     className='scroll'
            //     data={menu}
            //     arrowLeft={ArrowLeft}
            //     arrowRight={ArrowRight}
            //     selected={selected}
            //     onSelect={this.onSelect}
            //     />
            // </div>
           
            <ul className="carousel">
                {ButtonItems.map((item,index) =>{
                        return (
                            <button key={index} onClick={() => window.location.reload(false)} className="carousel-buttons">
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </button>
                        )
                    })}
            </ul>

            // <Carousel swipeable draggable 
            //     responsive={responsive} 
            //     arrows="false" infinite>
                // {ButtonItems.map(item => (
                 
                //             <button>
                //                 <a alt="nav-urls"  onClick={e => {
                //                     if (this.state.isMoving) {
                //                         e.preventDefault();
                //                         } 
                //                     }} 
                //                     className={item.cName} 
                //                 href={item.url}> {item.title} </a>
                //             </button>
                  
                // ))}
            // </Carousel>
           
  
        )
    }
}

export default ButtonCarousel;