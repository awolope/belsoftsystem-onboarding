import Image from "next/image";
import styles from "../styles/Section.module.css";
import { FaArrowRight } from "react-icons/fa";
const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textLeft}>
        <h6>Founders Friday</h6>
        <h2>What Happens At Founders Friday</h2>
        <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        </p>
        <button className={styles.registerButton2}>
              Register <FaArrowRight size={10} />
            </button>
      </div>
      <div className={styles.imagesRight}>
        <div className={styles.imageContainer}>
          <Image
            src="/IMG_2501 3 (1).png"
            alt="Founder's friday"
            width={300}
            height={200}
            className={styles.image1}
          />
          <Image
            src="/IMG_2519 2 (2).png"
            alt="Founder's friday"
            width={300}
            height={200}
            className={styles.image2}
          />
        </div>
            <div className={styles.diagonalLine2}></div>
      </div>
  
    </section>
  );
};

export default Section;
