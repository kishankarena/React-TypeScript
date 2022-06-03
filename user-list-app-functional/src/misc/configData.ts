export const getUserData = async (pageNum:number) => {
  const response = await fetch(
    `https://reqres.in/api/users?page=${pageNum}`
  ).then((r) => r.json());
  return response;
};
