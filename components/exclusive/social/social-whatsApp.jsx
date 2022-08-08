import {
    WhatsappShareButton,
    WhatsappIcon,
  } from 'next-share'
  
  <WhatsappShareButton
    url={'https://1source.netlify.app'}
    title={'1Source the place for your entertainment when you just dont know what to do'}
    separator=":: "
  >
    <WhatsappIcon size={32} round />
  </WhatsappShareButton>

  export default WhatsappShareButton;