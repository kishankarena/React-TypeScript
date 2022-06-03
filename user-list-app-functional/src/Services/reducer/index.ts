
const initialData: InitialState = {
  user: { image: "", name: "", email: "", isVisible: false },
};
export const setUser = (state = initialData, action:DataAction) => {
  switch (action.type) {
    case "mouseEnter": {
      const { image, name, email } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          image: image,
          name: name,
          email: email,
          isVisible: true,
        },
      };
    }
    case "mouseLeave":
      return {
        ...state,
        user: {
          ...state.user,
          isVisible: false,
        },
      };
    default:
      return state;
  }
};

export type rootState = ReturnType<typeof setUser>