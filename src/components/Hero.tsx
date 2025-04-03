import { geistMono, geistSans } from "@/app/utils/fonts";
import React, { JSX } from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { CodeComparison } from "./magicui/code-comparison";
export default function Hero(): JSX.Element {
  const beforeCode = `

import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  const updateUser = () => {
    setUser({ name: 'John', age: '30' }); 
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserProfile;

`;

  const afterCode = `

import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({ name: 'Jane', age: 25 });

  const updateUser = () => {
    setUser({ name: 'John', age: 30 }); 
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserProfile;
`;

  const words: string[] = [
    "Debugging",
    "Refactoring",
    "Optimizing",
    "Testing",
    "Coding",
    "Troubleshooting",
    "Analyzing",
  ];
  return (
    <div>
      <div className="text-center">
        <h1
          className={`2xl:text-8xl xl:text-7xl md:text-6xl text-5xl ${geistSans.className} bg-gradient-to-t to-white from-white/60 bg-clip-text text-transparent font-bold 2xl:leading-28 xl:leading-24 lg:leading-20`}
        >
          Code Smarter Build Faster <br />
          <ContainerTextFlip
            words={words}
            className={`${geistMono.className} 2xl:text-8xl xl:text-7xl md:text-6xl text-2xl mt-5`}
          />
        </h1>
      </div>
      <div className="mt-20">
        <div className="relative">
          <div className="absolute inset-0 z-auto bg-[radial-gradient(circle,rgba(0,0,0,1)_10%,rgba(5,5,5,0.95)_20%,rgba(15,15,15,0.9)_30%,rgba(30,30,30,0.8)_45%,rgba(50,50,50,0.7)_60%,rgba(100,0,150,0.5)_75%,rgba(150,0,255,0.4)_85%,rgba(0,0,0,0.8)_100%)] rounded-full blur-[100px]" />
          <div className="relative p-4">
            <CodeComparison
              beforeCode={beforeCode}
              afterCode={afterCode}
              language="typescript"
              filename="UserProfile.tsx"
              lightTheme="github-light"
              darkTheme="github-dark"
              highlightColor="rgba(101, 117, 133, 0.16)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
