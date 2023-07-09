import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const GeneralDescription = () => (
  <div className={styles.description}>
    <div className={styles.picture}>
      <Image
        src="https://avatars2.githubusercontent.com/u/301291?s=400&v=4"
        alt="Ivan Santos"
        width={200}
        height={200}
      />
    </div>
    <div className={styles.content}>
      <div>
        <p>American citizen, born and raised in Brazil.</p>
        <p>
          I currently work on Platform Engineering and Developer Experience with
          Typescript, Go and Kubernetes.
        </p>
        <p>I live in Austin-TX and work for Everquote.</p>
      </div>
      <div>
        <p>
          When I&apos;m not at my computer, I love to travel, geek about
          finance, coffee, dancing, and volleyball.
        </p>
        <p>
          I&apos;ve been adventuring with a few dance styles in my free time,
          but my favorite is Lindy Hop!
        </p>
      </div>
    </div>
  </div>
);

export default GeneralDescription;
