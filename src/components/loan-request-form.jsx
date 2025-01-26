// 'use client'

// import { useState } from 'react';

// const LoanRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     cnic: '',
//     address: '',
//     loanAmount: '',
//     loanCategory: '',
//     guarantors: [{ name: '', email: '', cnic: '', location: '' }, { name: '', email: '', cnic: '', location: '' }],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleGuarantorChange = (index, e) => {
//     const { name, value } = e.target;
//     const newGuarantors = [...formData.guarantors];
//     newGuarantors[index][name] = value;
//     setFormData((prev) => ({ ...prev, guarantors: newGuarantors }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle loan request submission here
//     console.log('Loan Request Submitted:', formData);
//   };

//   return (
//     <section className="py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">Loan Request Form</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Personal Information */}
//           <div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Full Name"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Phone Number"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="cnic"
//               value={formData.cnic}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="CNIC"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Address"
//               required
//             />
//           </div>

//           {/* Loan Information */}
//           <div>
//             <input
//               type="number"
//               name="loanAmount"
//               value={formData.loanAmount}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Loan Amount"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="loanCategory"
//               value={formData.loanCategory}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Loan Category"
//               required
//             />
//           </div>

//           {/* Guarantor Information */}
//           {formData.guarantors.map((guarantor, index) => (
//             <div key={index} className="border-t pt-4">
//               <h3 className="text-lg font-semibold">Guarantor {index + 1}</h3>
//               <input
//                 type="text"
//                 name="name"
//                 value={guarantor.name}
//                 onChange={(e) => handleGuarantorChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-lg w-full"
//                 placeholder="Guarantor Name"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={guarantor.email}
//                 onChange={(e) => handleGuarantorChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-lg w-full"
//                 placeholder="Guarantor Email"
//                 required
//               />
//               <input
//                 type="text"
//                 name="cnic"
//                 value={guarantor.cnic}
//                 onChange={(e) => handleGuarantorChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-lg w-full"
//                 placeholder="Guarantor CNIC"
//                 required
//               />
//               <input
//                 type="text"
//                 name="location"
//                 value={guarantor.location}
//                 onChange={(e) => handleGuarantorChange(index, e)}
//                 className="p-2 border border-gray-300 rounded-lg w-full"
//                 placeholder="Guarantor Location"
//                 required
//               />
//             </div>
//           ))}

//           <div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LoanRequestForm;




'use client'

import { useState } from 'react';

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    address: '',
    loanAmount: '',
    loanCategory: '',
    guarantors: [{ name: '', email: '', cnic: '', location: '' }, { name: '', email: '', cnic: '', location: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const newGuarantors = [...formData.guarantors];
    newGuarantors[index][name] = value;
    setFormData((prev) => ({ ...prev, guarantors: newGuarantors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle loan request submission here
    console.log('Loan Request Submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Loan Request Form</h2>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="CNIC"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Address"
                required
              />
            </div>
          </div>

          {/* Loan Information */}
          <div className="space-y-4">
            <div>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Loan Amount"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="loanCategory"
                value={formData.loanCategory}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Loan Category"
                required
              />
            </div>
          </div>

          {/* Guarantor Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Guarantor Information</h3>
            {formData.guarantors.map((guarantor, index) => (
              <div key={index} className="border-t pt-6 space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Guarantor {index + 1}</h4>
                <input
                  type="text"
                  name="name"
                  value={guarantor.name}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Guarantor Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={guarantor.email}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Guarantor Email"
                  required
                />
                <input
                  type="text"
                  name="cnic"
                  value={guarantor.cnic}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Guarantor CNIC"
                  required
                />
                <input
                  type="text"
                  name="location"
                  value={guarantor.location}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Guarantor Location"
                  required
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoanRequestForm;
