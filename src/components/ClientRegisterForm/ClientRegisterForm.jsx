import { useForm } from 'react-hook-form';
import styles from './clientRegisterForm.module.css'
import Axios from '../../utils/AxiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientRegisterForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const notifySuccess = () => toast.success("Consulta enviada con éxito", {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
  })
  const notifyError = () => toast.error("Ha ocurrido un error. Por favor intenta mas tarde", {
    position: 'bottom-right',
    autoClose: 1500,
    hideProgressBar: false,
  })

  const onSubmit = async (data) => {
    try {
      const response = await Axios.post('/contact/', {
        ...data
      })
      reset()
      response
        ? notifySuccess()
        : notifyError()

    } catch (error) {
      console.log(error);
    }
  }

  return (
  
    <div className={ styles.container }>

      <div className={ styles.textContainer }>
        <h1>Contactanos</h1>
        <p>Por favor completa el formulario con tus datos y tu consulta.<br></br> Nos pondremos en contacto a la brevedad.</p>
      </div>

      <div className={ styles.formContainer }>
        <form
          className={ styles.form }
          role="form"
          autoComplete="on"
          onSubmit={ handleSubmit(onSubmit) }
        >

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-person-check ${styles.inputGroupIcon}` }
                id="basic-addon2">
              </i>

            </div>

            <input
              id="firsName"
              name='firstName'
              placeholder="Nombre"
              className={ styles.groupInput }
              type="text"
              { ...register('firstName', { required: true }) }
            />
          </div>
          { errors.firstName && (
            <small className={ styles.requiredField }>Este campo es obligatorio</small>
          ) }

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-person-check ${styles.inputGroupIcon}` } id="basic-addon2">
              </i>

            </div>

            <input
              id="lastName"
              name='lastName'
              placeholder="Apellido"
              className={ styles.groupInput }
              type="text"
              { ...register('lastName', { required: true }) }

            />
          </div>
          { errors.lastName && (
            <small className={ styles.requiredField }>Este campo es obligatorio</small>
          ) }

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-phone ${styles.inputGroupIcon}` } id="basic-addon2">
              </i>

            </div>

            <input
              id="phone"
              name='phone'
              placeholder="Telefono"
              className={ styles.groupInput }
              type="text"
              { ...register('phone', { required: true }) }
            />
          </div>
          { errors.phone && (
            <small className={ styles.requiredField }>Este campo es obligatorio</small>
          ) }

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-envelope-at ${styles.inputGroupIcon}` } id="basic-addon2">
              </i>

            </div>

            <input
              id="email"
              name='email'
              placeholder="Email"
              className={ styles.groupInput } type="email"
              { ...register('email', { required: true }) }
            />
          </div>
          { errors.email && (
            <small className={ styles.requiredField }>Este campo es obligatorio</small>
          ) }

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-pen ${styles.inputGroupIcon}` }
                id="basic-addon2">
              </i>

            </div>

            <textarea
              rows={ 5 }
              id="question"
              name='question'
              placeholder="Tu consulta"
              className={ `${styles.groupInput} ${styles.textArea}` }
              { ...register('question', { required: true }) }
            />

          </div>
          { errors.question && (
            <small className={ styles.requiredField }>Este campo es obligatorio</small>
          ) }

          <div
            className={ styles.inputGroupContainer }>

            <div
              className={ styles.inputGroupIconContainer }>

              <i
                className={ `bi bi-send ${styles.inputGroupIcon}` }
                id="basic-addon2">
              </i>

            </div>

            <input
              className={ styles.registerBtn }
              type="submit"
              value='Registrarme'
            // disabled={ loading }
            />

          </div>

        </form>
      </div>

      <div>
        <ToastContainer />
      </div>

    </div>

  )
}

export default ClientRegisterForm