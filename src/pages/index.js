import PageContainer from "../containers/PageContainer";
import withServerSideProps from "../lib/withServerSideProps";
import { useAppStateContext } from "../state/AppContext";
import Child from "../components/Child";

export default function Home(props) {
  console.log("props", props);
  const { user } = useAppStateContext();
  return (
    <PageContainer {...props}>
      <h2>
        Server rendered user details in page component
        <br />
        {JSON.stringify(user)}
        <p>Posts: {props.posts.length}</p>
        <p>Users: {props.users.length}</p>
      </h2>
      <Child />
    </PageContainer>
  );
}

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: await response.json() },
  };
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return {
    props: {
      posts: await response.json(),
    },
  };
};

export const getServerSideProps = withServerSideProps(fetchUsers, fetchPosts);
