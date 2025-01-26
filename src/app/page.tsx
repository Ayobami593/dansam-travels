import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center font-medium text-lg md:text-2xl space-y-3">
        <p className="text-center ">Welcome</p>
        <p className="text-center ">We are Dansam</p>
        <p className="text-center">
          We deal in education consulting and travel assistance
        </p>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
}
