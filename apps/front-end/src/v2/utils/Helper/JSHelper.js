import React, { useState, useLayoutEffect } from "react";
import { changeLanguage } from "i18next";
import { get, set } from "idb-keyval";
import { getSelectedAcademicYear, getSelectedProgramId } from "@shiksha/common-lib";

export function getWindowSize(maxWidth = "1080") {
  const [size, setSize] = useState([]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([
        window.innerWidth > maxWidth ? maxWidth : "100%",
        window.innerHeight > window.outerHeight
          ? window.outerHeight
          : window.innerHeight,
      ]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export function setLanguage(code) {
  localStorage.setItem("lang", code);
  changeLanguage(code);
}
export function getLanguage() {
  return localStorage.getItem("lang");
}
export function getUserId() {
  return localStorage.getItem("id");
}

export default getWindowSize;

//indexed db key-val get/set functions

export async function setIndexedDBItem(key, value) {
  try {
    await set(key, value);
  } catch (error) {
    console.error("Error setting IndexedDB item:", error);
  }
}

export async function getIndexedDBItem(key) {
  try {
    return await get(key);
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}
export async function checkEnumListPresent(key) {
  try {
    const enums = await getIndexedDBItem("enums");
    return !!enums;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}
export async function checkQulificationPresent(key) {
  try {
    const qualification = await getIndexedDBItem("qualification");
    return !!qualification;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}
export async function checkEditRequestPresent(key) {
  try {
    const editRequest = await getIndexedDBItem("editRequest");
    return !!editRequest;
  } catch (error) {
    console.error("Error getting IndexedDB item:", error);
    return null;
  }
}

export const fetchFileUrlAsBlob = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Error fetching or converting the file:", error);
  }
};

export const getHeaderDetails = async () => {
  let commonHeader = {}
  let academic_year_id = null
  let program_id = null
  try {
    let academic_year = await getSelectedAcademicYear()
    academic_year_id = academic_year?.academic_year_id
  } catch (e) {}
  try {
    let program = await getSelectedProgramId()
    program_id = program?.program_id
  } catch (e) {}
  commonHeader = {
    academic_year_id: academic_year_id,
    program_id: program_id
  }
  return commonHeader
}