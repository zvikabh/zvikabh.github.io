export const metadata = {
  title: 'Zvika Ben-Haim — Homepage',
};

export default function Home() {
  return (
    <>
      <p>Welcome to my homepage!</p>
      <p>Stuff you can find here includes:</p>
      <ul>
        <li><a href="publications">My publications</a></li>
        <li><a href="software">Fun software projects</a></li>
      </ul>
    </>
  );
};
