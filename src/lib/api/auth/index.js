/*global process*/
/*eslint no-undef: "error"*/
import useAxios from "@hooks/request/useAxios";

const ShenasehApiList = {
  changeToken: () => {
    return useAxios(
      {
        url: `/shenaseh/api/${process.env.SHENASEH_VERSION}/token/change`,
        method: "post",
      },
      { manual: true }
    );
  },
  forgetPasswrod: () => {
    return useAxios(
      {
        url: `/shenaseh/api/${process.env.SHENASEH_VERSION}/user/forget-password`,
        method: "post",
      },
      {
        manual: true,
      }
    );
  },
  verifyCode: () => {
    return useAxios(
      {
        url: `/shenaseh/api/${process.env.SHENASEH_VERSION}/auth/step-two`,
        method: "post",
      },
      {
        manual: true,
      }
    );
  }
};

export default ShenasehApiList;
