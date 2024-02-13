function Man() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  const peopleArray = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  const chemistProfessor = peopleArray.filter(
    (person) => person.profession === "chemist"
  );
  console.log(chemistProfessor);
  return (
    <div>
      <h1>Rendered People List #</h1>
      <ul>
        <li>
          {people.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </li>
      </ul>
      <hr />
      {people.join(",")}
      <hr />
      <h2>filter array of People $$</h2>
      <ul>
        {peopleArray.map((pa) => (
          <li key={pa.id}>
            {pa.name} - - - - {pa.profession}
          </li>
        ))}
      </ul>
      <hr />
      <h2>### Filter which profession should have "chemist"</h2>
      {chemistProfessor.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}
export default Man;
