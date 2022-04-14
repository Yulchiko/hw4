export const baseUrl =
//'https://jsonplaceholder.typicode.com'
    process.env.REACT_APP_API;

export const urls={
    users:  `${baseUrl}/users`,
    posts: `${baseUrl}/posts`
}