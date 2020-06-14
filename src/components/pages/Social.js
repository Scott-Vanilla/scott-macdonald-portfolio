import React from "react"

import AboutSection from "components/elements/AboutSection"
import CartoonAvatar from "assets/avatar.png"

const Social = () => {
    return (
        <div className="portfolio-socials">
            <div className="portfolio-socials__about-section">
                <AboutSection
                    title="Social Links:"
                    copy1="Instagram: "
                    copy2="Location: Liverpool"
                    copy3="React.js | Java | SQL"
                    imgSrc={CartoonAvatar}
                    altText="An avatar drawing of Scott MacDonald"
                    isHome={false}
                    isSocial={true}
                />
            </div>
        </div>
    )
}

export default Social;