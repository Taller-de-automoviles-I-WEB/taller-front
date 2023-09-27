import ServiceCards from "./ServiceCards";
import { cardContent } from './servicesCardsContent';
import styles from './workShopServices.module.css'
const WorkShopServices = () => {
  return (
    <div className={styles.cardsContainer}>
      { cardContent.map((card, index) => (
        <ServiceCards key={index} img={card.img} title={card.title} description={card.description} callToAction={card.callToAction} />
      )) }

    </div>
  );
}

export default WorkShopServices;






