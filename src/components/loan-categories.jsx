"use client";
import { useState } from "react";
import Link from "next/link"; // Ensure you import Link
import LoanCalculator from '@/components/loan-calculator'; // Import the LoanCalculator component

const LoanCategories = () => {
  const categories = [
    { name: "Wedding Loans" },
    { name: "Home Construction Loans" },
    { name: "Business Startup Loans" },
    { name: "Education Loans" }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">LOAN CATEGORIES</h2>
        <h3 className="text-2xl mb-12 text-gray-700">The organization offers support in the following categories</h3>
        
        {/* Loan Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray py-8 px-6 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:border-green-500 cursor-pointer hover:shadow-xl hover:bg-gray-50 ${
                selectedCategory === category.name ? 'border-gray-600' : 'border-gray-300'
              }`}
              onClick={() => setSelectedCategory(category.name)} // Set the category on click
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.name}</h3>
              <p className="text-green-600 font-medium mt-4 hover:text-green-700 hover:underline">
                <Link href="#">Get Loan</Link>
              </p>
            </div>
          ))}
        </div>

        {/* Conditionally Render Loan Calculator */}
        {selectedCategory && (
          <div className="mt-12 p-8 bg-white shadow-xl rounded-lg border border-gray-200">
            <LoanCalculator selectedCategory={selectedCategory} />
          </div>
        )}
      </div>
    </section>
  );
};

export default LoanCategories;
