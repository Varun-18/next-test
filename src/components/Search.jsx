import { Button, TextField } from "@mui/material";
import { addKeyword } from "@src/store/slice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState();
  const keyword = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const { status } = useSession();
  //   const [searchParams, setSearchParams] = useSearchParams();

  console.log(keyword);
  const searchBook = (e) => {
    // console.log(search);
    // setSearchParams({ name: search });
    // router.push("/book");
    router.replace({ query: { ...router.query, name: search } });
    e.preventDefault();
    dispatch(addKeyword(search));
  };

  if (status === "unauthenticated") {
    router.push("/login");
  }

  if (status === "laoding") {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <form onSubmit={(e) => searchBook(e)}>
        <TextField
          label="search books"
          type="text"
          variant="outlined"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}
