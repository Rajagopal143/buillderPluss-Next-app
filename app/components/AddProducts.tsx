// "use client"
// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";const ProductForm = () => {
//   const [formData, setFormData] = useState({
//     ProductName: "",
//     color: "",
//     application: "",
//     finish: "",
//     collectionName: "",
//     width: "",
//     thickness: "",
//     size: "",
//     length: "",
//     coverageArea: "",
//     tags: "",
//     side: "",
//     projectType: "",
//     design: "",
//     features: "",
//     look: "",
//     description: "",
//     itemImage: "",
//     packOf1Sheet: "",
//   });

//   const handleChange = (e:Object|any) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: Object | any) => {
//     e.preventDefault();
//     const data = {
//       ...formData,
//       application: formData.application.split(","),
//       tags: formData.tags.split(","),
//       projectType: formData.projectType.split(","),
//       features: formData.features.split(","),
//     };

//     try {
//       const response = await fetch("http://localhost:10001/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Server response:", result);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto p-4 space-y-4 absolute top-16 h-[550px] bg-white overflow-scroll right-10">
//       <RxCross1 className="w-5 h-5 fixed right-16 bg-[#0000007a] p-2 box-content rounded-md" />
//       {Object.keys(formData).map((key) => (
//         <div key={key} className="flex flex-col w-56">
//           <label htmlFor={key} className="mb-2 text-gray-700">
//             {key.charAt(0).toUpperCase() + key.slice(1)}
//           </label>
//           <input
//             type="text"
//             id={key}
//             name={key}
//             value={formData[key]}
//             onChange={handleChange}
//             className="p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//       ))}
//       <button
//         type="submit"
//         className="w-56 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ProductForm;
