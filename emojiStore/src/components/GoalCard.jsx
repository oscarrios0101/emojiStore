const GoalCard = ({ emoji, title, description }) => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 flex items-start gap-4">
      <span className="text-4xl">{emoji}</span>
      <div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
