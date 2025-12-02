// "use client";
// import { useEffect, useState } from "react";

// export default function Profile() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/profile", {
//       credentials: "include"
//     })
//       .then((res) => res.json())
//       .then((data) => setProfile(data));
//   }, []);

//   if (!profile) return <p>Loading profile...</p>;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-xl shadow-lg text-center w-96">
//         <img
//           src={profile.picture || profile.avatar_url}
//           alt="Profile"
//           className="w-28 h-28 rounded-full mx-auto mb-4 shadow"
//         />

//         <h2 className="text-xl font-bold">{profile.name}</h2>
//         <p className="text-gray-600">{profile.email}</p>

//         <p className="mt-4 text-gray-800 font-semibold">
//           Provider: {profile.iss ? "Google" : "GitHub"}
//         </p>
//       </div>
//     </div>
//   );
// }
