var initialData = {
  name: "Hridyansh",
};
// const basicReducer = (
//   storedata = {
//     name: "Hridyansh",
//   },
//   action
// ) => {
//   return storedata;
// };
const basicReducer = (storedata = initialData, action) => {
  if (action.type === "name") {
    return {
      name: action.username,
    };
  }
  return storedata;
};
export default basicReducer;
