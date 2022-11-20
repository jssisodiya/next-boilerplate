import { useEffect } from "react";
import { useAppDispatchContext } from "../state/AppContext";

export default function PageContainer(props) {
  const dispatch = useAppDispatchContext();

  useEffect(() => {
    if (props.user) {
      dispatch({
        type: "SET_USER",
        payload: props.user,
      });
    }
  }, [props.user, dispatch]);

  return <>{props.children}</>;
}
