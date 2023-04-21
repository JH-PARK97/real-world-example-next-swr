

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "users/login",

        REGIS: "users",
    },

    ARTICLE: {
        ROOT: 'articles', // Create, Get List ,

        DETAIL: (slug: string | number) => `articles/${slug}`, // Get Single Article, Update, Delete

        FAVORITE: {
            DETAIL: (slug: string | number) => `articles/${slug}/favorite`
        },
        FEED: 'articles/feed',

        COMMENT: {

            ROOT: (slug: string | number) => `articles/${slug}/comments`, // Get Comments From an Article
            DELETE: (slug: string | number, id: string | number) => `articles/${slug}/comments/${id}`,

        }

    },
    TAGS: {
        ROOT: "tags",
    },

    USER: {
        ROOT: "user"
    },

    PROFILES: {
        ROOT: (username: string | number) => `profiles/${username}`, // Get user Profile
        FOLLOW: (username: string | number) => `profiles/${username}/follow`, // Follow, Unfollow User
    }
};


// react-vite에서 가져와서 수정필요

export const PAGE_ENDPOINTS = {
    ROOT: '/',

    AUTH: {
        ROOT: '/auth',
        LOGIN: '/login',
        REGIS: '/register',
    },
    EDITOR: '/editor',
    SETTINGS: "/settings",
    PROFILE: "/profile",
    ARTICLE: "/article",


}
