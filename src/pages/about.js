import PageContainer from "../containers/PageContainer";
import withServerSideProps from "../lib/withServerSideProps";
import { useAppStateContext } from "../state/AppContext";
import Link from "next/link";

export default function About(props) {
  const { user } = useAppStateContext();
  return (
    <PageContainer {...props}>
      <Link href="/">Home</Link>
      <h2>
        Server rendered user details in page component
        <br />
        {JSON.stringify(user)}
      </h2>

      <h3>About Page</h3>
    </PageContainer>
  );
}

export const getServerSideProps = withServerSideProps();
