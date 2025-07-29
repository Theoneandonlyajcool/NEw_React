const Btn = (props) => {
  const { name, age, className } = props;
  return (
    <div>
      <button className={`${className}`}>{name}</button>
    </div>
  );
};

export default Btn;
