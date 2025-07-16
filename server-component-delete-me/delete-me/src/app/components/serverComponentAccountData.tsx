async function fetchAccountData() {
  const { accountData } = await import('@/data/global-data');
  return accountData;
}

export default async function ServerComponentPage() {
  const data = await fetchAccountData();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
