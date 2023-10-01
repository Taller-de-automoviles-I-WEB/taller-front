import ServiceCards from "./ServiceCards";
import { cardContent } from './servicesCardsContent.js';
import styles from './workShopServices.module.css'
const WorkShopServices = () => {
  return (
    <div className={styles.container}>
      <h1>Servicios</h1>
      <p className={ styles.text }>¡Agenda un turno ya y nos encargaremos de tu vehículo!</p>
      <div className={ styles.cardsContainer }>
        { cardContent.map((card, index) => (
          <ServiceCards key={ index } img={ card.img } imgText={ card.imgText } title={ card.title } description={ card.description } callToAction={ card.callToAction } />
        )) }

      </div>
    </div>

  );
}

export default WorkShopServices;






