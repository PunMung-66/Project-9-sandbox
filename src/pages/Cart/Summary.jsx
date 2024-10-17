export const SummarySection = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 border-b pb-4 border-secondary-300">
      {children}
    </div>
  );
};

export const SummaryRow = ({
  name,
  price,
  leftClassname = "",
  rightClassname = "",
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className={`capitalize ${leftClassname}`}>{name}</span>
      <span className={rightClassname}>{price}</span>
    </div>
  );
};
