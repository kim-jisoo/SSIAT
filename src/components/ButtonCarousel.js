import React, {Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './ButtonCarousel.css';
import {ButtonItems} from "./ButtonItems";

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
  ];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };
  
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
});


const Arrow = ({ text, className }) => {
    return (
        <div
        className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class ButtonCarousel extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
      }
    
      state = {
        selected
      };
    
      onSelect = key => {
        this.setState({ selected: key });
      }

    render() {
        const {selected} = this.state;
        const menu =this.menu;

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
         
        )
    }
}

export default ButtonCarousel;