"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Camp from "@/components/worldComponents/camp";
import FirstPersonControls from "./FirstPersonControls"; // If you have this

export default function CampPage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 2, 12], fov: 75 }}
        shadows
        gl={{ alpha: false }}
      >
        <Camp />
        <FirstPersonControls /> {/* Add if you have first-person controls */}
      </Canvas>
    </div>
  );
}
