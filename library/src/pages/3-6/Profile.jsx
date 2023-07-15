import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user/1', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 데이터 렌더링
  return <div>hello {data.name}!</div>;
}

export default Profile;
