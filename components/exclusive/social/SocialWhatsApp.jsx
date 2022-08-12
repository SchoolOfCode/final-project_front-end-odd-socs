import { WhatsappShareButton, WhatsappIcon } from "next-share";

const SocialWhatsApp = () => {
  return (
    <WhatsappShareButton
      url={"https://1source.netlify.app"}
      title={
        "1Source the place for your entertainment when you just dont know what to do"
      }
      separator=":: "
    >
      <WhatsappIcon size={55} round />
    </WhatsappShareButton>
  );
};

export default SocialWhatsApp;
