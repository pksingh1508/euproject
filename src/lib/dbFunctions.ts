import axios from "axios";
import { BlogResponse, StrapiResponse, SuccessStoryResponse } from "./dbTypes";

export async function fetchPaginatedImmigrationNews(
  token: string,
  page: number = 1,
  pageSize: number = 10,
  locale: string = "en",
  collection: string
): Promise<StrapiResponse> {
  try {
    const BASE_URL = `https://determined-unity-de531adc95.strapiapp.com/api/${collection}`;

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        locale: locale,
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        "fields[0]": "title",
        "fields[1]": "short_desc",
        "fields[2]": "updatedAt",
        "fields[3]": "views",
        "fields[4]": "slug",
        "populate[news_image][fields][0]": "url"
      }
    });

    return response.data as StrapiResponse;
  } catch (error) {
    console.error("Error fetching paginated immigration news:", error);
    throw new Error("Failed to fetch paginated immigration news");
  }
}

export async function getPaginatedBlog(
  token: string,
  page: number = 1,
  pageSize: number = 10,
  locale: string = "en",
  collection: string
): Promise<BlogResponse> {
  try {
    const BASE_URL = `https://determined-unity-de531adc95.strapiapp.com/api/${collection}`;

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        locale: locale,
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        "fields[0]": "title",
        "fields[1]": "short_desc",
        "fields[2]": "updatedAt",
        "fields[3]": "likes_count",
        "fields[4]": "slug",
        "populate[blog_image][fields][0]": "url"
      }
    });

    return response.data as BlogResponse;
  } catch (error) {
    console.error("Error fetching paginated blogs:", error);
    throw new Error("Failed to fetch paginated blogs");
  }
}

export async function getSingleBlogPost(
  token: string,
  slug: string,
  locale: string = "en",
  collection: string
): Promise<BlogResponse> {
  try {
    const BASE_URL = `https://determined-unity-de531adc95.strapiapp.com/api/${collection}`;

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        locale: locale,
        "filters[slug][$eq]": slug,
        "fields[0]": "title",
        "fields[1]": "contents",
        "fields[2]": "updatedAt",
        "fields[3]": "comments_count",
        "fields[4]": "likes_count",
        "fields[5]": "tags",
        "fields[6]": "category",
        "populate[blog_image][fields][0]": "url"
      }
    });

    return response.data as BlogResponse;
  } catch (error) {
    console.error("Error fetching single blog post:", error);
    throw new Error("Failed to fetch single blog post");
  }
}

export async function getSingleNews(
  token: string,
  slug: string,
  locale: string = "en",
  collection: string
): Promise<StrapiResponse> {
  try {
    const BASE_URL = `https://determined-unity-de531adc95.strapiapp.com/api/${collection}`;

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        locale: locale,
        "filters[slug][$eq]": slug,
        "fields[0]": "title",
        "fields[1]": "contents",
        "fields[2]": "updatedAt",
        "fields[3]": "views",
        "fields[4]": "slug",
        "fields[5]": "tags",
        "fields[6]": "category",
        "populate[news_image][fields][0]": "url"
      }
    });

    return response.data as StrapiResponse;
  } catch (error) {
    console.error("Error fetching single news:", error);
    throw new Error("Failed to fetch single news");
  }
}

export async function getAllSuccessStories(
  token: string,
  page: number = 1,
  pageSize: number = 10,
  locale: string = "en",
  collection: string
): Promise<SuccessStoryResponse> {
  try {
    const BASE_URL = `https://determined-unity-de531adc95.strapiapp.com/api/${collection}`;

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        locale: locale,
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
        "fields[0]": "name",
        "fields[1]": "story",
        "fields[2]": "updatedAt",
        "populate[success_image][fields][0]": "url",
        "sort[0]": "updatedAt:desc"
      }
    });

    return response.data as SuccessStoryResponse;
  } catch (error) {
    console.error("Error fetching all success stories:", error);
    throw new Error("Failed to fetch all success stories");
  }
}
