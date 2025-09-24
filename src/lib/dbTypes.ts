export interface NewsItem {
  id: number;
  attributes?: {
    title: string;
    publishedAt?: string;
    updatedAt?: string;
    views: number;
    slug: string;
    short_desc?: string;
    contents?: string;
    tags?: string;
    category?: string;
    news_image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
  // Alternative structure in case Strapi returns flat data
  title?: string;
  publishedAt?: string;
  updatedAt?: string;
  views?: number;
  slug?: string;
  short_desc?: string;
  contents?: string;
  tags?: string;
  category?: string;
  news_image?: {
    url: string;
  };
}

export interface BlogItem {
  id: number;
  attributes?: {
    title: string;
    updatedAt: string;
    likes_count: number;
    slug: string;
    short_desc?: string;
    contents?: string;
    comments_count?: number;
    tags?: string;
    category?: string;
    blog_image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
  // Alternative structure in case Strapi returns flat data
  title?: string;
  updatedAt?: string;
  likes_count?: number;
  slug?: string;
  short_desc?: string;
  contents?: string;
  comments_count?: number;
  tags?: string;
  category?: string;
  blog_image?: {
    url: string;
  };
}

export interface TestimonialItem {
  id: number;
  attributes?: {
    name: string;
    what_they_say: string;
    slug: string;
    role: string;
    view_count?: number;
    updatedAt: string;
    user_image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
  // Alternative structure in case Strapi returns flat data
  name?: string;
  what_they_say?: string;
  slug?: string;
  view_count?: number;
  role?: string;
  updatedAt?: string;
  user_image?: {
    url: string;
  };
}

export interface SuccessItem {
  id: number;
  attributes?: {
    name: string;
    story: string;
    updatedAt: string;
    success_image?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
  // Alternative structure in case Strapi returns flat data
  name?: string;
  story?: string;
  updatedAt?: string;
  success_image?: {
    url: string;
  };
}

export interface StrapiResponse {
  data: NewsItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogResponse {
  data: BlogItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface TestimonialResponse {
  data: TestimonialItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface SuccessStoryResponse {
  data: SuccessItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
