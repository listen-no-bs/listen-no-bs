export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Listen No BS',
    subtitle: 'No Judgment. No Fixing. Just Listening.',
    description: 'A no-BS listening service for when you need to vent. $100 upfront, no refunds unless I die mid-session.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Listen No BS - Vent without judgment'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Book A Session',
            href: '/book'
        },
        {
            text: 'FAQ',
            href: '/faq'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Privacy Policy',
            href: '/privacy'
        },
        {
            text: 'Book a Session',
            href: '/book'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter/X',
            href: 'https://twitter.com/listennobs'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/listen-no-bs'
        }
    ],
    hero: {
        title: 'Need to Vent? I Actually Listen. No BS.',
        text: "Life is messy. People suck. Work is a joke. Maybe you just need to talk to someone who won't interrupt, judge, or try to 'fix' you. That's where I come in. **$100 upfront, no refunds unless I die mid-session.** Book a session, say whatever you need, and I'll actually hear you out.",
        image: {
            src: '/hero.jpeg',
            alt: 'Person talking to someone who actually listens'
        },
        actions: [
            {
                text: 'Book a Session',
                href: '/book'
            }
        ]
    },
    subscribe: {
        title: 'Not Really a Newsletter. Just No BS.',
        text: 'No spam. No fake positivity. Just occasional posts. Just book if you need to talk.',
        formUrl: 'https://magic.beehiiv.com/v1/bb3c46da-a5a5-440c-b95e-b2685a2c8eae?email='
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
