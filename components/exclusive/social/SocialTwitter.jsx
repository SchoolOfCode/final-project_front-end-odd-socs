import { TwitterShareButton, TwitterIcon } from "next-share";

const SocialTwitter = () => {
  return (
    <TwitterShareButton
      url={"https://1source.netlify.app"}
      title={
        "1Source the place for your entertainment when you just dont know what to do"
      }
    >
      <TwitterIcon size={55} round />
    </TwitterShareButton>
  );
};
export default SocialTwitter;
