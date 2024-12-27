/*eslint react/prop-types:0*/
function Stars({ numStare }) {
  let x = "";
  for (let i = 0; i < Number(numStare).toFixed(0); i++) {
    x += "⭐";
  }

  return <div>{x}</div>;
}

export default Stars;
