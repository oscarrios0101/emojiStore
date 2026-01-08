import GoalCard from "./GoalCard";

const Goals = () => {
  const goals = [
    {
      emoji: "🧠",
      title: "React Mindset",
      description:
        "I'm gaining familiarity with the React way of thinking, especially the immutability of state.",
    },
    {
      emoji: "📦",
      title: "Context Architecture",
      description:
        "Using 2 contexts instead of 1 (one for products and one for the cart) to keep concerns separated. Also, not using context for every single thing because when looping an array, it is better to pass props (maybe it is even the correct way).",
    },
    {
      emoji: "⚡",
      title: "Data Optimization",
      description:
        "Adding the quantity property to each product when the app loads greatly reduces code complexity.",
    },
    {
      emoji: "🤖",
      title: "AI-Assisted Development",
      description:
        "Using AI (the Gemini extension in VS Code and the Kilo Code extension using the Qwen 3 API key) to ask questions and clarify concepts, while giving it corrections or second-guessing its decisions.",
    },
    {
      emoji: "🎨",
      title: "Tailwind CSS",
      description:
        "Using Tailwind CSS styles while gaining familiarity with it.",
    },
  ];

  return (
    <section className="text-slate-100 max-w-4xl mx-auto px-6 py-10">
      <h2 className="font-bold text-3xl mb-8 text-center">
        Learning Journey 🚀
      </h2>
      <div className="space-y-6">
        {goals.map((goal) => (
          <GoalCard key={goal.title} {...goal} />
        ))}
      </div>
    </section>
  );
};

export default Goals;
