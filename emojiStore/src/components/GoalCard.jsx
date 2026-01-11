const GoalCard = ({ emoji, title, description }) => {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
      <span className="text-4xl">{emoji}</span>
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
