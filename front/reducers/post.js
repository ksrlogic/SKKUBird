export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "비내리는~",
      },
      content: "첫 번째 게시글 #해시태그 ###익스프레스",
      Images: [
        {
          src: "/profile.PNG",
        },
        {
          src: "https://picsum.photos/seed/picsum/200/300",
        },
        {
          src: "https://picsum.photos/seed/picsum/200/300",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 !!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "멋지다!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPostAction = () => {
  return {
    type: ADD_POST,
  };
};

const dummyPost = {
  id: 2,
  content: `더미데이터`,
  User: {
    id: 1,
    nickname: "안녕!",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
