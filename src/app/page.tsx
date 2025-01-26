import Header from "@/components/header";
import Footer from "@/components/footer";
import LoanCategories from "@/components/loan-categories";
import LoanCalculator from "@/components/loan-calculator";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="py-12 text-center">
          <h1 className="text-5xl font-semibold  ">Welcome to the Saylani Welfare
          Non Governmental Organization in Pakistan</h1>
          <p className="mt-9">We are here to help you with your loan needs. Choose a category and calculate your loan today!Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives. </p>
        </section>

        <LoanCategories />
        <LoanCalculator selectedCategory={undefined} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
