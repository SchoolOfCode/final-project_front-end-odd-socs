import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share';
  
  <FacebookShareButton
    url={'https://1source.netlify.app'}
    quote={'1Source the place for your entertainment when you just dont know what to do'}
    hashtag={'#1Source'}
  >
    <FacebookIcon size={32} round />
  </FacebookShareButton>


export default FacebookShareButton;