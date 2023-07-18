import Image from "next/image";

export default function Page() {
  const staff = [
    {
      name: "Jalyn Huang",
      role: "co-founder, co-president",
    },
    {
      name: "Ashley Liau",
      role: "co-founder, co-president",
    },
    {
      name: "Audrey Chen",
      role: "Vice President",
    },
    {
      name: "Arjun Zaveri",
      role: "Secretary",
    },
    {
      name: "Rachel Tran",
      role: "Treasurer",
    },
    {
      name: "Andrew Ro",
      role: "Publicity Chair",
    },
    {
      name: "Adah Wang",
      role: "Department Head, Science",
    },
    {
      name: "Joshua Kim",
      role: "Department Head, Technology",
    },
    {
      name: "Shivani Joshi",
      role: "Department Head, Engineering",
    },
    {
      name: "Catherine Li",
      role: "Department Head, Art",
    },
    {
      name: "Lucy Zhao",
      role: "Department Head, Math",
    },
  ];

  return (
    <div className="container">
      {/* Our mission */}
      <div className="box">
        <div className="py-10 flex items-center max-w-3xl mx-auto gap-10">
          <div>
            <h1 className="font-heading text-6xl heading">our mission</h1>
            <Image src="/arrow.svg" width={459.96} height={11.96} alt="Arrow" />
          </div>
          <div>
            <p className="text-xl">(brief mission statement)</p>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="flex mt-5 gap-3">
        <div className="w-full flex flex-col">
          <div className="box p-5 mb-3">
            <h1 className="font-heading text-5xl heading text-center">
              about us
            </h1>
          </div>
          <div className="box p-5 grow text-center flex items-center justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="box max-w-sm">
          <Image
            src="/activity.png"
            width={1043 / 2}
            height={817 / 2}
            className="w-full rounded-xl"
            alt="Activity"
          />
          <p className="text-center">
            <i>(caption of image above)</i>
          </p>
        </div>
      </div>

      {/* Staff */}
      <div className="flex items-center gap-4 my-4">
        <div
          className="p-4 w-full rounded-xl"
          style={{ background: "var(--colors-red)" }}
        />
        <div className="box shrink-0 w-auto">
          <h1 className="text-4xl heading px-5 font-heading">our staff</h1>
        </div>
        <div
          className="p-4 w-full rounded-xl"
          style={{ background: "var(--colors-red)" }}
        />
      </div>
      {staff.map((member) => (
        <div className="text-center mt-10" key={member.name}>
          <h1 className="text-2xl">{member.name}</h1>
          <h3 className="heading text-lg mb-5">{member.role}</h3>
          <div className="box h-[100px] relative">
            <div
              className="border-4 rounded-full flex items-center text-center bg-gray-200 absolute -top-[20px] -left-[15px]"
              style={{
                borderColor: "var(--colors-red)",
                height: "140px",
                width: "140px",
              }}
            ></div>
            <h4>(description)</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
