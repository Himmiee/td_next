import BannerWithOverlay from '@/components/custom/banner-with-overlay'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      {/* latter change to real Map */}
      <BannerWithOverlay
        imageSrc={require("@/public/images/mapplaceholder.png")}
        title=""
        description=""
        socialIcons={false}
      />
    </div>
  )
}

export default ContactPage