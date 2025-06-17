import Link from "next/link";

const HomePage = () => {
  const id = 11;
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/users">
            Users
          </Link>
        </li>
        <li>
          <Link href="/users/about">
            About Users
          </Link>
        </li>
        <li>
          <Link href={`/users/${id}`}>
            User with id {id}
          </Link>
        </li>
      </ul>
    </>
  );
};
export default HomePage;
// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to Next.js!</h1>
//       <p>This is your first page.</p>
//     </div>
//   );
// }
