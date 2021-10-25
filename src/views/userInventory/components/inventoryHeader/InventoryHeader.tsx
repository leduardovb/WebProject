import {
  Container,
  ProfileContainer,
  ProfileDescritpionContainer,
  ProfilePictureImage,
  SocialMediaButton,
  SocialMediaContainer,
  SocialMediaIcon,
  SocialMediaIcons,
  TitleDescription,
} from "./InventoryHeaderBase";

import YoutubeIcon from "../../../../images/icons/youtubeIcon.svg";
import TwitterIcon from "../../../../images/icons/facebookIcon.svg";
import FacebookIcon from "../../../../images/icons/twitterIcon.svg";
import ProfileImage from "../../../../images/profilePicture/profilePicture.png";

function InventoryHeader() {
  return (
    <Container>
      <ProfileContainer>
        <ProfilePictureImage src={ProfileImage} />
        <ProfileDescritpionContainer>
          <TitleDescription>pHeniX</TitleDescription>
        </ProfileDescritpionContainer>
      </ProfileContainer>
      <SocialMediaContainer>
        <TitleDescription>Connect with social network</TitleDescription>
        <SocialMediaIcons>
          <SocialMediaButton>
            <SocialMediaIcon src={TwitterIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={FacebookIcon} />
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={YoutubeIcon} />
          </SocialMediaButton>
        </SocialMediaIcons>
      </SocialMediaContainer>
    </Container>
  );
}

export default InventoryHeader;
