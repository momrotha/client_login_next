

// export default function Home() {
//   return (
//     <div>
//       <h1>Login Demo</h1>

//       <a href="http://localhost:8080/oauth2/authorization/google">
//         <button>Login with Google</button>
//       </a>

//       <a href="http://localhost:8080/oauth2/authorization/github">
//         <button>Login with GitHub</button>
//       </a>
//     </div>
//   );
// }


"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>

        {/* Google Login */}
        <Link href="/oauth2/authorization/google">
          <button className="w-full mb-3 py-2 rounded bg-red-500 text-white">
            Sign in with Google
          </button>
        </Link>

        {/* GitHub Login */}
        <Link href="/oauth2/authorization/github">
          <button className="w-full py-2 rounded bg-gray-800 text-white">
            Sign in with GitHub
          </button>
        </Link>
      </div>
    </div>
  );
}

