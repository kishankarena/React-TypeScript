
export const mouseEnter = (data: Data) => {
  return {
    type: "mouseEnter",
    payload: data,
  };
};
export const mouseLeave = () => 
{
    return{
        type:"mouseLeave",
    };
}
 