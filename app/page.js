"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { sum } from "./functions/sum.js";

export default function Home() {
  const result = sum(1, 2);
  console.log(result);

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  return <div className={styles.page}></div>;
}
