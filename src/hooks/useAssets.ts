"use client";
import { useState, useEffect } from "react";
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy 
} from "firebase/firestore";
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export interface Asset {
  _id?: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: Date;
  uploadedBy?: string;
}

export function useAssets() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all assets
  const fetchAssets = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "assets"), orderBy("uploadedAt", "desc"));
      const querySnapshot = await getDocs(q);
      const assetsData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        _id: doc.id
      })) as Asset[];
      setAssets(assetsData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Upload asset
  const uploadAsset = async (file: File, uploadedBy?: string) => {
    try {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const storageRef = ref(storage, `assets/${fileName}`);
      
      // Upload to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // Save metadata to Firestore
      const assetData = {
        name: file.name,
        url: downloadURL,
        type: file.type,
        size: file.size,
        uploadedAt: new Date(),
        uploadedBy: uploadedBy || "admin"
      };
      
      const docRef = await addDoc(collection(db, "assets"), assetData);
      await fetchAssets();
      return docRef.id;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  // Delete asset
  const deleteAsset = async (asset: Asset) => {
    try {
      if (!asset._id) throw new Error("Asset ID not found");
      
      // Delete from Firestore
      await deleteDoc(doc(db, "assets", asset._id));
      
      // Delete from Storage
      const storageRef = ref(storage, asset.url);
      await deleteObject(storageRef);
      
      await fetchAssets();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return {
    assets,
    loading,
    error,
    fetchAssets,
    uploadAsset,
    deleteAsset
  };
} 