import { useForm } from 'react-hook-form';
import styles from './clientRegisterForm.module.css'
const ClientRegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //Post
    console.log(data)
  }

  return (
    <div className={styles.container}>

      <h1>Contactanos</h1>
      <p>Por favor completa el formulario con tus datos y tu consulta.<br></br> Nos pondremos en contacto a la brevedad.</p>

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
              id="nombre"
              name='nombre'
              placeholder="Nombre"
              className={ styles.groupInput }
              type="text"
              { ...register('nombre', { required: true }) }
            />
          </div>
          { errors.nombre && (
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
              id="apellido"
              name='apellido'
              placeholder="Apellido"
              className={ styles.groupInput }
              type="text"
              { ...register('apellido', { required: true }) }

            />
          </div>
          { errors.apellido && (
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
              id="telefono"
              name='telefono'
              placeholder="Telefono"
              className={ styles.groupInput }
              type="text"
              { ...register('telefono', { required: true }) }
            />
          </div>
          { errors.telefono && (
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
              id="username"
              name='username'
              placeholder="Email"
              className={ styles.groupInput } type="email"
              { ...register('username', { required: true }) }
            />
          </div>
          { errors.username && (
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
              id="message"
              name='message'
              placeholder="Tu consulta"
              className={ `${styles.groupInput} ${styles.textArea}` }
              { ...register('message', { required: true }) }
            />

          </div>
          { errors.message && (
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

    </div>





  )
}

export default ClientRegisterForm