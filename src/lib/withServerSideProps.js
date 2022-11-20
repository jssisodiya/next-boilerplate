// This will call the user details endpoint with the cookie in req object
const fetchUser = (req) => {
  return new Promise((resolve) => {
    resolve({
      id: "123",
      email: "john@doe.com",
      name: "John Doe",
    });
  });
};

export const isPropsResult = (result) => "props" in result;

export const isRedirectResult = (result) => "redirect" in result;

export const isNotFoundResult = (result) =>
  "notFound" in result && !!result.notFound;

const withServerSideProps =
  (...composers) =>
  async (context) => {
    const [userDetails, ...composerResults] = await Promise.all([
      fetchUser(context.req),
      ...composers.map((fn) => {
        return fn(context);
      }),
    ]);
    // @todo call this in parallel
    // const userDetails = await fetchUser(context.req);

    return composerResults.reduce(
      (prevResult, composerResult) => {
        if (isRedirectResult(prevResult) || isNotFoundResult(prevResult)) {
          console.log("returning");
          return prevResult;
        }

        if (
          isRedirectResult(composerResult) ||
          isNotFoundResult(composerResult)
        ) {
          return composerResult;
        }

        return {
          props: {
            ...prevResult.props,
            ...composerResult.props,
          },
        };
      },
      {
        props: {
          user: userDetails || null,
        },
      }
    );
  };

export default withServerSideProps;
