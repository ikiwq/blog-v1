export type author = {
    name: string,
    photo: {
      url: string
    }
    bio: string
}

export type Post = {
    createdAt: string,
    contentMarkdown: string,
    author: author,
    title: string,
    featureImage: {
        url: string
    },
    slug: any,
    excerpt: string,
    categories: [Category],
}

export type Category = {
    slug: any,
    name: string
}


