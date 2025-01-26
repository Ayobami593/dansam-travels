import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center font-medium text-lg md:text-2xl space-y-3">
        <p className="text-center animate-pulse">Welcome</p>
        <p className="text-center animate-ping">We are Dansam</p>
        <p className="text-center animate-pulse">
          We deal in education consulting and travel assistance, your education
          is our priority
        </p>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
}
