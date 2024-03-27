'use client';
import { useState, useEffect } from 'react';
import Search from '@/components/search';
import Pagination from '@/components/Pagination';
import { githubSearch } from '@/lib/api';

export default function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const itemsPerPage = 20;

  const handleSearch = async (
    query: string,
    page: number,
    itemsPerPage: number
  ) => {
    setLoading(true);
    setHasSearched(true);
    try {
      const params = { q: query, per_page: itemsPerPage, page };
      const { items, totalCount } = await githubSearch(params);
      setRepositories(items);
      setTotalCount(totalCount);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query, page, itemsPerPage);
    }
  }, [query, page]);

  return (
    <main>
      <Search setQuery={setQuery} setPage={setPage} />
      {loading ? (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <>
          {repositories.length > 0 ? (
            <ul className="flex flex-col gap-5 mt-10">
              {repositories.map((repo: { [key: string]: string }) => (
                <li
                  key={repo.id}
                  className="border border-[#444c56] p-5 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 text-blue-500 font-bold text-lg"
                  >
                    {repo.name}
                  </a>
                  <p className="line-clamp-3">{repo.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              {hasSearched ? (
                <div className="text-center mt-10">查無資料</div>
              ) : (<div className="text-center mt-10">請輸入搜尋條件進行搜尋</div>)}
            </>
          )}
          {totalCount > 0 && (
            <div className="mt-5 mx-auto">
              <Pagination
                page={page}
                setPage={setPage}
                totalCount={totalCount}
                itemsPerPage={itemsPerPage}
              />
            </div>
          )}
        </>
      )}
    </main>
  );
}
