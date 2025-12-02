"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Profile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile", { credentials: "include" }) // proxy to Spring
      .then(res => {
        if (!res.ok) throw new Error("not authenticated");
        return res.json();
      })
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  if (profile === null) return <div>Loading or not authenticated</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <img
          src={profile.picture || profile.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-3"
        />
        <h2 className="text-xl font-semibold">{profile.name || profile.login}</h2>
        <p className="text-sm text-gray-500">{profile.email}</p>
      </div>
    </div>
  );
}
