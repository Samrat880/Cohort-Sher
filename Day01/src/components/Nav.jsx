import React from 'react'

function Nav() {
  return (
    <div class="flex item-center justify-between p-5 bg-gray-600 overflow-hidden static">
      <h1 class="text-3xl font-bold underline  ">Welcome to the NavBar</h1>
      <h2 class=" text-xl font-semibold hover:text-blue-500 ">
        <ul class = "flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </h2>
    </div>
  );
}

export default Nav