'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { db } from "../firebase"
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
import { useState } from "react"

export function SheetDemo() {
    const [newThought, setNewThought] = useState({ name: "", thought: ""});
    const addThought = async (e) => {
        e.preventDefault();
        if (newThought.name !== '' && newThought.thought !== '') {
          // setItems([...items, newItem]);
          await addDoc(collection(db, 'thoughts'), {
            name: newThought.name.trim(),
            thought: newThought.thought,
          });
        }
    };
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white">Add a Thought</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-white flex flex-col gap-5 justify-center items-center">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-between gap-3">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" value={newThought.name}
              onChange={(e) => setNewThought({ ...newThought, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thought" className="text-right">
              Thought
            </Label>
            <Input id="thought" className="col-span-3" value={newThought.thought}
              onChange={(e) => setNewThought({ ...newThought, thought: e.target.value })} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={() => addThought}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
