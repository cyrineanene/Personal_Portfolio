import { VOLUNTEERING_DATA } from "../constants";

const Volunteering = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-thin text-center mb-8">Volunteering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {VOLUNTEERING_DATA.map((event) => (
          <div key={event.id} className="relative overflow-hidden group">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
              <h3 className="text-2xl font-thin text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {event.title}
              </h3>
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {event.date}
              </p>
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {event.description}
              </p>
              <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {event.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;