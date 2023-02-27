const Calhead = ({result,text}) => {
  return (
    <div className="cal">
      <div className="Result">
        <h1>{result}</h1>
      </div>
      <div className="Test">
        <h3>{text}</h3>
      </div>
    </div>
  );
};
export default Calhead;
