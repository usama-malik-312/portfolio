import React from 'react';
import styles from './certificates.module.css'; // Import the CSS module for styling
import Image from 'next/image'; // Import Image from Next.js for optimization

export default function Certificates() {
  return (
    <div className={styles.certificates}>
      <h2 className={styles.heading}>Certificates</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src="/usama.JPG"
            alt="Certificate 1"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/usama.JPG"
            alt="Certificate 2"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/usama.JPG"
            alt="Certificate 3"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
