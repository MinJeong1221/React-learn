/* eslint-disable react/prop-types */
import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function Page() {
  return (
    <div>
      <Profile id={123} />
      <Avatar id={123} />
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

function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={123} />;
    </>
  );
}

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

export default Page;
