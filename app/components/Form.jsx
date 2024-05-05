import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { collection, addDoc, query, getDoc, QuerySnapshot, onSnapshot, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default function CardWithForm() {
  const [newThought, setNewThought] = useState({name: '', thought: ''});
  //Add Data:
  const addThought = async (e) => {
    e.preventDefault();
    if (newThought.name !== '' && newThought.thought !== '') {
      //setThoughts([...thoughts, newThought]);
      await addDoc(collection(db, 'thoughts'), {
        name: newThought.name.trim(),
        thought: newThought.thought,
      })
    }
  }
  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle>Add Thought</CardTitle>
        <CardDescription>
          Add your Thought directly to the Database and share with the World!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newThought.name}
                onChange={(e) =>
                  setNewThought({ ...newThought, name: e.target.value })
                }
                placeholder="Enter Name"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Thought</Label>
              <Input
                id="name"
                placeholder="Insert your Thought"
                value={newThought.thought}
                onChange={(e) =>
                  setNewThought({ ...newThought, thought: e.target.value })
                }
                type="text"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={addThought} type="submit">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
