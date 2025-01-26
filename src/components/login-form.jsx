// 'use client'
// import { useState } from 'react';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login submitted:', credentials);
//   };

//   return (
//     <section className="py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Password"
//               required
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;




'use client'
import { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', credentials);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
