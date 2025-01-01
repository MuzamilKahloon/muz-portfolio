import { BIO } from '../constants/index';

const Bio = () => {
  return (
    <section className="flex flex-col max-w-4xl gap-12 pt-20" id="bio">
      <h2 className="text-3xl text-center lg:text-4xl">Bio</h2>
      <div>
        {BIO.map((bio, index) => (
          <p key={index} className="mb-4 text-lg lg:text-xl">{bio}</p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
