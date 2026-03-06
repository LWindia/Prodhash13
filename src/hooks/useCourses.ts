"use client";
import { useState, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  where 
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Course, NewCourse } from "../../types/courses";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "courses"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const coursesData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        _id: doc.id
      })) as Course[];
      setCourses(coursesData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new course
  const addCourse = async (courseData: NewCourse) => {
    try {
      const docRef = await addDoc(collection(db, "courses"), {
        ...courseData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      await fetchCourses();
      return docRef.id;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Update course
  const updateCourse = async (id: string, courseData: Partial<Course>) => {
    try {
      const courseRef = doc(db, "courses", id);
      await updateDoc(courseRef, {
        ...courseData,
        updatedAt: new Date()
      });
      await fetchCourses();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Delete course
  const deleteCourse = async (id: string) => {
    try {
      await deleteDoc(doc(db, "courses", id));
      await fetchCourses();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Get course by ID
  const getCourseById = async (id: string) => {
    try {
      const courseRef = doc(db, "courses", id);
      const courseDoc = await getDocs(query(collection(db, "courses"), where("__name__", "==", id)));
      if (!courseDoc.empty) {
        return { ...courseDoc.docs[0].data(), _id: courseDoc.docs[0].id } as Course;
      }
      return null;
    } catch (err: any) {
      setError(err.message);
      return null;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourseById
  };
} 