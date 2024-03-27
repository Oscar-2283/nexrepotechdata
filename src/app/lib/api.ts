import axios from 'axios';

interface searchResult {
  items: any;
  totalCount: number;
}

export const githubSearch = async (params:{ q:string , per_page: number , page:number}): Promise<searchResult> => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_GITHUB_API_URL}`, {
      method: 'GET',
      params
    });
    return { items: response.data.items, totalCount: response.data.total_count };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}