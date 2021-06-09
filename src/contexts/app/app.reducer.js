export const initialState = {
  isSticky: false,
  isSidebarSticky: true,
  isEn: true,
};

export function reducer(state, { type }) {
  switch (type) {
    case 'SET_EN':
      return {
        ...state,
        isEn: true,
      };
    case 'SET_CN':
      return {
        ...state,
        isEn: false,
      };
    case 'SET_STICKY':
      return {
        ...state,
        isSticky: true,
      };
    case 'REMOVE_STICKY':
      return {
        ...state,
        isSticky: false,
      };
    case 'SET_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: true,
      };
    case 'REMOVE_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: false,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
