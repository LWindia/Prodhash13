import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { Course } from "../../types/courses";

export async function getAllCourses(): Promise<Course[]> {
  try {
    const q = query(
      collection(db, "courses"),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      _id: doc.id
    })) as Course[];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  try {
    const q = query(
      collection(db, "courses"),
      where("slug", "==", slug),
      where("status", "==", "published")
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { ...doc.data(), _id: doc.id } as Course;
    }
    return null;
  } catch (error) {
    console.error("Error fetching course by slug:", error);
    return null;
  }
}

export async function getCoursesByCategory(category: string): Promise<Course[]> {
  try {
    const q = query(
      collection(db, "courses"),
      where("category", "==", category),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      _id: doc.id
    })) as Course[];
  } catch (error) {
    console.error("Error fetching courses by category:", error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const q = query(
      collection(db, "courses"),
      where("status", "==", "published")
    );
    const querySnapshot = await getDocs(q);
    const categories = new Set<string>();
    querySnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.category) {
        categories.add(data.category);
      }
    });
    return Array.from(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
} 