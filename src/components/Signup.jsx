import { Button } from "@mui/base";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { status } = useSession();
  const router = useRouter();
  const signup = async ({ username, email, password }) => {
    const { data } = await axios.post("/api/signup", {
      username,
      email,
      password,
    });
    console.log(data);
  };

  if (status === "authenticated") {
    router.replace("/search");
  }

  if (status === "loading") {
    return <div>Loading.....</div>;
  }

  return (
    <div className="m-10">
      <div className="lg:w-2/6 md:w-1/2 bg-white border-2 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full  md:mt-0 mx-auto ">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Signup
        </h2>
        <form onSubmit={handleSubmit(signup)}>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="username"
              {...register("username")}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Signup
          </button>
        </form>
        <Button
          className="text-xs text-gray-500 mt-3"
          onClick={() => router.push("/login")}
        >
          Already have an account Login ?
        </Button>
      </div>
    </div>
  );
};

export default Signup;
