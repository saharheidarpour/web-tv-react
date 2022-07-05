import useAxios from "@hooks/request/useAxios";

const SearchApiList = {
    search: () => {
    return useAxios(
      {
        url: `https://gateway.telewebion.com/pouya/api/${process.env.POUYA_VERSION}/search`,
        method: "post",
      },
      { manual: true }
    );
  },
};

export default SearchApiList;
