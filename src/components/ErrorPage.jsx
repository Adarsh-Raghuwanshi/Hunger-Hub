import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-9">
      <h1 className="text-fuchsia-700 font-bold text-8xl">Oops!</h1>
      <h3 className="text-fuchsia-700 text-3xl font-medium">{`${error.status} : Page ${error.statusText}`}</h3>
      <h3 className="text-fuchsia-700 text-2xl font-medium">{error.data}</h3>
    </div>
  );
};

export default ErrorPage;
