import React, { useState } from "react";

const Name = () => {
    const [profile, setProfile] = useState({
        restaurantName: "Delicious Bites",
        logoUrl: "https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg",
        contactNumber: "+1 234 567 890",
        email: "contact@deliciousbites.com",
        address: "123 Food Street, City",
        ownerName: "John Doe",
      });
  return (
    <div className="flex items-center pt-10 gap-5">
          <img
            src={profile.logoUrl}
            alt={`${profile.restaurantName} Logo`}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{profile.restaurantName}</h1>
            <p className="text-lg text-gray-600">Owner: {profile.ownerName}</p>
          </div>
    </div>
  )
}

export default Name