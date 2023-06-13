import Search from "@src/components/Search";
import { wrapper } from "@src/store";
import { addKeyword, updateMessage } from "@src/store/slice";

function SearchBar({ message, book }) {
  return (
    <>
      <Search />
      <h1>{message}</h1>
      {book[0]?.id}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ query }) => {
      // await store.hydrate()
      // store.hydrate();
      const data = store.getState();
      console.log(data, "-----------");
      // console.log(query, "*******");
      if (!query?.name) {
        return {
          props: {
            message: data.mainReducer.keyword,
            book: [],
          },
        };
      }

      store.dispatch(addKeyword("react"));
      // console.log("after dispatch");
      const freshData = store.getState();
      return {
        props: {
          message: freshData.mainReducer.keyword,
          book: [
            {
              id: 1,
            },
          ],
        },
      };
    }
);

export default wrapper.withRedux(SearchBar);
