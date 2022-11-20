import { useAppStateContext } from "../state/AppContext";
import Link from "next/link";

function Child1() {
  const { user } = useAppStateContext();

  return (
    <>
      <h3>
        Server rendered user details in child 1 component <br />
        {JSON.stringify(user)}
      </h3>
      <Child2 />
    </>
  );
}

function Child2() {
  const { user } = useAppStateContext();

  return (
    <h3>
      Server rendered user details in child 2 component <br />
      {JSON.stringify(user)}
    </h3>
  );
}

export default function Child() {
  const { user } = useAppStateContext();

  return (
    <>
      <Link href="/about">About</Link>
      <h3>
        Server rendered user details in child component <br />
        {JSON.stringify(user)}
      </h3>

      <Child1 />
    </>
  );
}
