import React from 'react';

import AboutSection from '../elements/AboutSection';
import CartoonAvatar from "assets/avatar.png"


const Home = () => {
    return (
        <div className="portfolio-homepage">
            <div className="portfolio-homepage__about-section">
                <AboutSection
                    title="Scott Macdonald"
                    copy1="Front End Developer"
                    copy2="Location: Liverpool"
                    copy3="React.js | Java | SQL"
                    imgSrc={CartoonAvatar}
                    altText="An avatar drawing of Scott MacDonald"
                    isHome={true}
                    isSocial={false}
                />
            </div>
        </div>
    )
}

export default Home;