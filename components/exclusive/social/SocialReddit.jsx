import { RedditShareButton, RedditIcon } from "next-share";

const SocialReddit = () => {
  return (
    <RedditShareButton
      url={"https://1source.netlify.app"}
      quote={
        "1Source the place for your entertainment when you just dont know what to do"
      }
    >
      <RedditIcon size={55} round />
    </RedditShareButton>
  );
};
export default SocialReddit;
