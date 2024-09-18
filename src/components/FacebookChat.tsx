'use client';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookChat = () => {
  return (
    <FacebookProvider appId='368800916164136' chatSupport>
      <CustomChat pageId='120296917670755' minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookChat;
