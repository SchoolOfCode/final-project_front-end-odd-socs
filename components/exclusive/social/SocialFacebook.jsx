import {
    FacebookShareButton,
    FacebookIcon,
  } from 'next-share';
  
  const SocialFacebook = () => {
    return (
  <FacebookShareButton
    url={'https://1source.netlify.app'}
    quote={'1Source the place for your entertainment when you just dont know what to do'}
    hashtag={'#1Source'}
  >
    <FacebookIcon size={55} round />
  </FacebookShareButton>
    )};

export default SocialFacebook;