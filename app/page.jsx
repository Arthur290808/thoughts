"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  getDoc,
  QuerySnapshot,
  onSnapshot,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";
import CardWithForm from "./components/Form";
import Thought from "./components/thought";
import { Button } from "@/components/ui/button";
import { SheetDemo } from "./components/Sheet";

export default function Home() {
  const [thoughts, setThoughts] = useState();

  //Read
  const getThoughts = async () => {
    const querySnapshot = await getDocs(collection(db, "thoughts"));
    const thoughts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
    setThoughts(thoughts);
  };
  useEffect(() => {
    getThoughts();
  }, []);
  return (
    <div className="h-full w-full h-[100vh] wrapper bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 m-10">
        {thoughts &&
          thoughts.map((thought) => (
            <Thought name={thought.name} thought={thought.thought} id={thought.id} />
          ))
        }
      </div>
    </div>
  );
}
