import ShowcaseContainer from "./ui/showcase-container";

const school_list = [
  {
    id: 1,
    name: "Skyline College @ San Bruno, CA",
    major: " Computer Science, Phi Theta Kappa Honor Society, GPA - 3.9",
    timeline: "2021 - 2022",
  },
  {
    id: 2,
    name: "Taunggyi University @ Myanmar",
    major: "BSc Physics",
    timeline: "2009 - 2012",
  },
];

function School({ school }: { school: (typeof school_list)[0] }) {
  const { name, major, timeline } = school;
  return (
    <div className="text-sm flex justify-between">
      <div className="">
        <h2>{name}</h2>
        <p className="text-shadow-gray">{major}</p>
      </div>
      <p className="font-mono text-shadow-gray self-end hidden md:block">
        {timeline}
      </p>
    </div>
  );
}

export default function Schools() {
  return (
    <ShowcaseContainer title="school">
      <main className="space-y-6 px-3 md:px-4">
        {school_list.map((school) => (
          <School key={school.id} school={school} />
        ))}
      </main>
    </ShowcaseContainer>
  );
}
