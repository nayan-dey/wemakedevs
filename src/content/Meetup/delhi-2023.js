import { ParticularMeetupPageContent } from '@/content/Meetup/ParticularMeetupPageContent';

const DelhiMeetupFAQ = [
  {
    id: 'FAQ1',
    question: 'How do I join?',
    answer:
      'Submit the registration form, and you will receive an email with venue details if you are selected.',
  },
  {
    id: 'FAQ2',
    question: 'Why should I attend this meetup?',
    answer:
      'You will learn new skills, network with professionals in the field, stay connected to the community, socialize with like-minded people, and gain inspiration from new technologies and ideas.',
  },
  {
    id: 'FAQ3',
    question:
      'If I am not from Delhi, will I get any student scholarship if I get selected ?',
    answer:
      'Sorry for this time, you have to cover your travel expense on your own.',
  },
  {
    id: 'FAQ4',
    question: 'What are the precautions to be taken?',
    answer:
      'We are experiencing rise in Covid in NCR region, we advise you to carry mask and sanitizer bottle along with you for the event.',
  },
  {
    id: 'FAQ5',
    question: 'Is it for both students and professionals?',
    answer:
      'Both professionals and students are welcome at this meetup because the talks range in difficulty from beginner to advanced. So, you can complete the registration form regardless of whether you are a student or professional.',
  },
  {
    id: 'FAQ6',
    question: 'Is it a paid event?',
    answer: 'This is a completely free-to-join and invite-only event .',
  },
];

const Delhi2023 = {
  header: ParticularMeetupPageContent.header,
  faq: DelhiMeetupFAQ,
  CTA: ParticularMeetupPageContent.CTA,
  slug: 'delhi-2023',
  poster: '/assets/images/meetup/delhi-2023/Poster.jpg',
  heroImg: '/assets/images/meetup/delhi-2023/hero.png',
  title: 'WeMakeDevs Delhi Meetup',
  venueVideoLink: 'https://www.youtube.com/embed/I7udikjqiaE',
  description: [
    {
      text: 'Join us at our tech meetup, where innovation and collaboration collide. ',
    },
    {
      text: 'In our upcoming meetup get a chance to connect with industry experts, expand your knowledge, and discover new opportunities for personal and professional growth.',
    },
  ],
  whyjoin: [
    'Expand your professional connections',
    'Gain valuable insights from inspiring talks',
    'Receive expert career guidance',
    'Receive cool swags',
    'Enjoy pizza',
    'All of this for free.',
  ],
  agendas: [
    // Formate for agenda
    // Time should be in GMT
    {
      title: 'College inauguration',
      start: 'Sun, 7 May 2023 05:00:00 GMT',
      end: 'Sun, 7 May 2023 05:30:00 GMT',
      description: '',
      speaker: '',
    },
    {
      title: 'Opening remarks',
      start: 'Sun, 7 May 2023 05:30:00 GMT',
      end: 'Sun, 7 May 2023 05:40:00 GMT',
      description: '',
      speaker: 'Kunal Kushwaha',
    },
    {
      title: ' Code of conduct',
      start: 'Sun, 7 May 2023 05:40:00 GMT',
      end: 'Sun, 7 May 2023 06:00:00 GMT',
      description: '',
      speaker: 'Aayush Sharma',
    },
    {
      title: 'Head-to-Head: DevOps vs MLOps – Unraveling the Confusion',
      start: 'Sun, 7 May 2023 06:00:00 GMT',
      end: 'Sun, 7 May 2023 06:30:00 GMT',
      description: '',
      speaker: 'Subhasmita Swain',
    },
    {
      title: 'Sponsor message',
      start: 'Sun, 7 May 2023 06:30:00 GMT',
      end: 'Sun, 7 May 2023 06:35:00 GMT',
      description: '',
      speaker: '',
    },
    {
      title: 'Grow with WeMakeDevs',
      start: 'Sun, 7 May 2023 06:40:00 GMT',
      end: 'Sun, 7 May 2023 07:05:00 GMT',
      description: '',
      speaker: 'Kaiwalya Koparkar',
    },
    {
      title: 'GitOps just a Buzzword',
      start: 'Sun, 7 May 2023 07:05:00 GMT',
      end: 'Sun, 7 May 2023 07:30:00 GMT',
      description: ' ',
      speaker: 'Abhinav Dubey',
    },
    {
      title: 'Lunch and networking',
      start: 'Sun, 7 May 2023 07:30:00 GMT',
      end: 'Sun, 7 May 2023 08:30:00 GMT',
      description: '',
      speaker: '',
    },
    {
      title: 'Sponsor message',
      start: 'Sun, 7 May 2023 08:30:00 GMT',
      end: 'Sun, 7 May 2023 08:35:00 GMT',
      description: '',
      speaker: '',
    },
    {
      title: 'Containerizing - How and When?',
      start: 'Sun, 7 May 2023 08:40:00 GMT',
      end: 'Sun, 7 May 2023 09:20:00 GMT',
      description: '',
      speaker: 'Apporv Goyal',
    },
    {
      title: 'Path from a novice to seasoned techie',
      start: 'Sun, 7 May 2023 09:20:00 GMT',
      end: 'Sun, 7 May 2023 10:00:00 GMT',
      description: '',
      speaker: 'Aakansha, Bhavya, Siddhant and Rakshit',
    },
    {
      title: 'Closing Ceremony',
      start: 'Sun, 7 May 2023 10:00:00 GMT',
      end: 'Sun, 7 May 2023 10:15:00 GMT',
      description: '',
      speaker: 'Bhavya Sachdeva',
    },
    {
      title: 'Networking and Photos',
      start: 'Sun, 7 May 2023 10:30:00 GMT',
      end: 'Sun, 7 May 2023 11:00:00 GMT',
      description: '',
      speaker: '',
    },
  ],
  speakers: [
    {
      name: 'Kunal Kushwaha',
      description: 'DevRel Manager @Civo',
      twitter: 'kunalstwt',
      img: 'https://github.com/kunal-kushwaha.png',
    },
    {
      name: 'Subhasmita Swain',
      description: 'SRE @Civo',
      twitter: 'iam_subhasmita',
      img: 'https://github.com/SubhasmitaSw.png',
    },
    {
      name: 'Apoorv Goyal',
      description: 'Remote Engineer & Web Developer',
      twitter: 'apoorvtwts',
      img: 'https://github.com/apoorv-on-git.png',
    },
    {
      name: 'Abhinav Dubey',
      description: 'DevOps Engineer @DevtronL',
      twitter: 'abhinavd26',
      img: 'https://github.com/Abhinav-26.png',
    },
    {
      name: 'Aakansha Priya',
      description: 'DevRel @WeMakeDevs',
      twitter: 'AakanshaPriya_',
      img: 'https://github.com/priyaaakansha.png',
    },
    {
      name: 'Bhavya Sachdeva',
      description: 'Junior Developer Evangelist @Merico',
      twitter: 'bhavya_58',
      img: 'https://github.com/bhavyastar.png',
    },
    {
      name: 'Siddhant Khisty',
      description: 'Community Manager @Wemakedevs',
      twitter: 'i_siddhantk',
      img: 'https://github.com/siddhant-khisty.png',
    },
    {
      name: 'Kaiwalya Koparkar',
      description: 'CNCF Ambassador & GCE',
      twitter: 'kaiwalya_',
      img: 'https://github.com/kaiwalyakoparkar.png',
    },
  ],
  sponsors: [
    // Formate for sponser
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/hashnode.png',
      url: 'https://hashnode.com/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/civo.png',
      url: 'https://www.civo.com/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/armo.svg',
      url: 'https://www.armosec.io/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/avesha.svg',
      url: 'https://avesha.io/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/boot.png',
      url: 'https://boot.dev/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/rawkode.svg',
      url: 'https://rawkode.academy/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/metabob.png',
      url: 'https://bit.ly/3LtjBp9',
    },
  ],
  comuSponsors: [
    // Formate for Community sponser
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/cncf.jpeg',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/kubesimplify.svg',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/virtual.svg',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/nashik.png',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/devtron.png',
      url: 'https://devtron.ai/',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/fluxninja.png',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/shebuilds.png',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/devs.png',
    },
    {
      src: '/assets/images/meetup/delhi-2023/sponsors/dungeon.jpeg',
    },
  ],
  on: 'Sun, 07 May 2023 05:00:00 GMT',
};
export default Delhi2023;
