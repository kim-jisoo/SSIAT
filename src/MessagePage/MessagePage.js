import React from 'react';
import NavBar from '../_components/NavBar';
import ContactCard from '../_components/ContactCard';
import './MessagePage.css';

function MessagePage() {
    return(
        <div >
            <NavBar/>
            <div className="message-container">
                <div className="message-list">
                    <ContactCard name="홍길동" groupName="하이킹" date="01/04/2021"/>
                    <ContactCard name="홍길동" groupName="하이킹" date="01/04/2021"/>
                    <ContactCard name="홍길동" groupName="하이킹" date="01/04/2021"/>
                </div>
                <div className="message-col-2">
                    soimething
                </div>
            </div>
        </div>
    )

}

export {MessagePage};