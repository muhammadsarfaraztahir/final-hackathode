// 'use client'

// import { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section className="py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">User Registration</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
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
//               name="cnic"
//               value={formData.cnic}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="CNIC"
//               required
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;



'use client'

import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto max-w-lg p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">User Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition duration-300"
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
              className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="CNIC"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
