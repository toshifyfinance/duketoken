import Chat from 'assets/widget/twitter.svg';
import Community from 'assets/widget/telegram.svg';
import Megaphone from 'assets/widget/megaphone.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      iconHref: 'http://Twitter.com/duketokens',
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      iconHref: 'http://T.me/duketokencom',
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Megaphone,
      iconHref: 'http://t.me/toshifyfinance',
      altText: 'Announcement',
      title: 'Announcement',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    }
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
