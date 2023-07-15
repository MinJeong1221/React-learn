/* eslint-disable react/prop-types */
import React from 'react';
import useSWR, { SWRConfig, useSWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function localStorageProvider() {
  // 초기화할 때, `localStorage`의 데이터를 map으로 복구합니다.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'));

  // app을 unloading하기 전에, 모든 데이터를 `localStorage`에 다시 씁니다.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('app-cache', appCache);
  });

  // 성능을 위해 여전히 map을 사용해 쓰고 읽습니다.
  return map;
}

export default function Cache() {
  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      <Page />
    </SWRConfig>
  );
}

function Page() {
  //   const { cache } = useSWRConfig();
  const { mutate } = useSWRConfig();
  return (
    <div>
      {/* <Profile id={123} /> */}
      <Avatar id={1212} />
      <button
        onClick={() => {
          mutate('/api/user/1212');
          //   console.log(`check: ${JSON.stringify(cache.get('/api/user/1212'))}`);
        }}
      >
        check
      </button>
    </div>
  );
}

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

// function Profile({ id }) {
//   const { user, isLoading, isError } = useUser(id);

//   if (isError) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

//   return (
//     <>
//       <div>hello {user.name}!</div>
//       <Avatar id={123} />;
//     </>
//   );
// }

function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>hello {user.name}(Avatar)!</div>
    </>
  );
}
