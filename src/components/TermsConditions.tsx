import React from 'react'
import { Formik, useFormikContext } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import Image from 'next/image'
import { StyledButton, VariantType } from '../styles/ButtonStyles'
import { ButtonContainer, ImgContainer, StyledForm } from '../styles/FormStyles'

type TermsData = {
  terms: boolean
}
interface Iprops {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const WrapperConditions = styled.div`
  overflow-y: scroll;
  padding: 10px;
  height: 400px;
  text-align: justify;
  & h4 {
    text-align: center;
  }
`

const TermsConditions: React.FC<Iprops> = ({ setStep }) => {
  const { submitForm, setFieldValue } = useFormikContext()

  const initialValues: TermsData = {
    terms: true
  }

  const handleSubmit = (values: TermsData) => {
    setFieldValue('acceptContract', values.terms)
    submitForm()
  }

  const validationSchema = Yup.object({
    terms: Yup.bool().oneOf([true], 'Obligatorio')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleSubmit(values)
      }}
    >
      {() => (
        <StyledForm method="POST">
          <ImgContainer>
            <Image
              src="https://s3.amazonaws.com/mox.cash/website/615b3d76eef2b86a7a22a186_mox-main-logo-sep21.svg"
              alt="Mox Servicios de Nómina"
              width="180px"
              height="40px"
              priority
            />
          </ImgContainer>

          <>
            <WrapperConditions>
              <h4>Términos y Condiciones Generales de Uso</h4>
              <p>
                MOX Servicios de Nómina, S.A.P.I. de C.V. (en lo sucesivo
                “MOX”), con domicilio en San Pedro Garza García, Nuevo León,
                México, te da a conocer por este medio los Términos y
                Condiciones de Uso de la aplicación móvil de MOX diseñada para
                que puedas disponer anticipadamente del monto que decidas de tu
                salario ya trabajado antes de tu próxima fecha de pago y/o
                cualquier otra plataforma digital que MOX ponga a tu disposición
                para los fines aquí establecidos.
              </p>
              <p>
                Los presentes Términos y Condiciones Generales de Uso (en lo
                sucesivo “Términos” y/o “Condiciones”) tienen un carácter
                obligatorio y vinculante; todo usuario deberá abstenerse de
                utilizar MOX en caso de no aceptarlos. El uso de MOX y la
                autorización de los presentes Términos y Condiciones conforme a
                lo establecido en este documento, te otorga el carácter de
                “Cliente” de MOX. Toda aplicación o gestión dentro de MOX se
                entenderá como la aceptación expresa de los presentes Términos y
                Condiciones. Al aceptar estos Términos, aceptas que existe una
                relación jurídica válida y vinculante entre MOX y tú, vigente
                hasta en tanto no manifiestes tu deseo de terminar dicha
                relación, solicitando el cierre de tu cuenta de usuario creada
                conforme a lo dispuesto en la sección IV siguiente y
                absteniéndote de utilizar cualquier servicio que MOX ofrece o
                llegue a ofrecer.
              </p>
              <p>
                Como Cliente tienes la obligación de leer, entender y aceptar
                todas las condiciones establecidas en los Términos, en el Aviso
                de Privacidad y en los demás documentos análogos que impliquen
                una referencia directa o indirecta a los primeros, antes de
                registrarse o realizar cualquier gestión dentro de la MOX.
              </p>
              <p>
                <b>
                  LEE ESTOS TÉRMINOS Y CONDICIONES DETENIDAMENTE ANTES DE
                  ACCEDER O USAR LOS SERVICIOS.
                </b>
              </p>
              <br />
              <h4>I. USO Y RESTRICCIONES</h4>
              <p>
                Mediante tu acceso y uso de MOX, estás acordando vincularte
                jurídicamente por estos Términos y Condiciones, estableciendo
                una relación contractual entre tú y MOX. Si no aceptas dichos
                Términos y Condiciones, no podrás acceder o usar MOX, mismo que
                estará disponible únicamente para personas que gocen de la
                capacidad legal para contratar y para quienes no hayan sido
                vetados definitiva o parcialmente por MOX y/o cualesquiera de
                sus partes relacionadas, a su sola discreción.
              </p>
              <p>
                MOX podrá poner fin de inmediato a estos Términos y Condiciones,
                respecto de ti o, en general, dejar de ofrecer o denegar el
                acceso a MOX en cualquier momento y por cualquier motivo.
              </p>
              <p>
                Se podrán aplicar condiciones suplementarias, como políticas
                para una actividad o una promoción particular y dichas
                condiciones suplementarias se comunicarán según resulte
                aplicable. Las condiciones suplementarias se establecen además
                de los Términos y Condiciones, y se considerarán una parte más
                de estos, para los fines que resultaren aplicables. Las
                condiciones suplementarias prevalecerán sobre los Términos y
                Condiciones en el caso de conflicto.
              </p>
              <p>
                Para poder acceder y utilizar MOX, deberás completar el
                formulario correspondiente con tu información personal de manera
                precisa, verdadera y libre de vicios de mala fe, asumiendo el
                compromiso de monitorear y modificar tus datos personales cuando
                sea necesario. MOX no se responsabilizará bajo ninguna
                circunstancia de la imprecisión de los datos personales que
                brindes y/o validez, reservándose la facultad de requerir
                documentación comprobatoria y/o las correcciones que estime
                pertinentes.
              </p>
              <p>
                La recopilación y el uso que hacemos de la información personal
                en relación con MOX es conforme a lo dispuesto en nuestro Aviso
                de Privacidad Integral para Clientes/Usuarios, disponible en
                mox.cash/es/politicas.
              </p>
              <br />
              <h4>II. MODIFICACIONES</h4>
              <p>
                MOX podrá modificar libremente y en cualquier momento los
                Términos y Condiciones cuando lo considere oportuno. Las
                modificaciones serán efectivas después de la publicación por
                parte de MOX de dichos Términos y Condiciones actualizados en la
                plataforma MOX. Tu acceso o uso continuado de MOX después de
                dicha publicación, constituye tu consentimiento a vincularte por
                los Términos y Condiciones y sus modificaciones, siendo la
                última versión publicada la que regulará inmediatamente las
                relaciones comerciales que se generen al momento de realizarse
                las transacciones.
              </p>
              <br />
              <h4>III. OBJETO</h4>
              <p>
                Los presentes Términos y Condiciones regulan la autorización de
                uso que otorga MOX a los Clientes, para que éstos ingresen a MOX
                y, en su caso, solicite el pago anticipado de su salario ya
                trabajado conforme a lo aquí establecido.
              </p>
              <p>
                La celebración de la relación contractual se da únicamente entre
                MOX y Clientes personas físicas, mayores de edad con capacidad
                legal para contratar. El proceso de adquisición del servicio de
                MOX es siempre a través de dicha plataformas propiedad de MOX y
                nunca de forma presencial o a través de algún intermediario. El
                Cliente, al utilizar MOX, declara que actúa por cuenta propia y
                que los fondos que le sean depositados será para uso personal y
                nunca para un tercero, y para fines permitidos por la ley.
              </p>
              <br />
              <h4>IV. CUENTA DE USUARIO</h4>
              <p>
                Sujeto al cumplimiento de los presentes Términos y Condiciones,
                previamente hemos creado una cuenta de usuario con la
                información proporcionada por tu empleador consistente en tu
                número telefónico y RFC y/o CURP. No obstante, dicha cuenta se
                encuentra inactiva hasta que oficialmente la hayas activado
                proporcionándoles la información solicitada y aceptando los
                presentes Términos y Condiciones. Tú cuenta de usuario es
                personal, exclusiva e intransferible, por lo que solicitaremos
                que valides tu teléfono celular y te pediremos que generes una
                contraseña para ingresar. MOX se reserva cualquier derecho que
                no haya sido expresamente otorgado por los presentes Términos y
                Condiciones. (La “Cuenta de Usuario”).
              </p>
              <p>
                El uso de la Cuenta de Usuario es personal e intransferible, por
                lo cual no te encuentras facultado para ceder los datos de
                validación para el acceso a tu Cuenta de Usuario. En caso de
                olvido de los datos de validación o de usurpación de estos, es
                tu obligación como Cliente informar a MOX a través de cualquiera
                de los medios de contacto que se ponen a tu disposición en los
                presentes Términos y Condiciones.
              </p>
              <p>
                Es tu entera responsabilidad mantener de forma confidencial y en
                un lugar seguro tus datos de ingreso y contraseña para acceder a
                tu Cuenta de Usuario, por lo que mediante el presente
                instrumento, deslindas a MOX de toda responsabilidad por la
                pérdida o daño alguno, sin importar su alcance o naturaleza, que
                resulte del acceso no autorizado a tu Cuenta de Usuario.
              </p>
              <br />
              <h4>V. SOLICITUD DE SALARIO TRABAJADO</h4>
              <p>
                MOX es una plataforma que te permite acceder al salario que ya
                has trabajado durante el periodo de pago que corresponda
                (semanal, catorcenal, quincenal o mensual), según conste en el
                contrato individual de trabajo que celebraste previamente con tu
                empleador. De modo que, cuando lo solicites, MOX realizará el
                pago de dicho salario trabajado en la proporción que tú indiques
                a través de MOX, previo a la siguiente fecha de pago según
                corresponda, en nombre y por cuenta de tu empleador. En este
                sentido, mediante la aceptación de los presentes Términos y
                Condiciones, aceptas e instruyes que tu empleador pague a MOX el
                monto total de la(s) disposición(es) de salario trabajado que
                hubieras realizado a través de MOX durante el periodo de pago
                correspondiente; de modo que, en la fecha acordada de pago con
                tu empleador, este realizará el pago de tu salario, restando el
                monto de cualquier disposición que tú hubieres realizado en MOX,
                monto que pagará a MOX en los términos acordados por ambos.
              </p>
              <p>
                El salario trabajado se devenga diariamente, por lo que podrás
                disponer en MOX del salario diario que hubieren trabajado
                multiplicado por el número de días que hayan transcurrido hasta
                un día antes de tu solicitud y este se encontrará sujeto y
                limitado a los porcentajes de salario en el periodo que al
                respecto haya aprobado tu empleador, mismo que no excederá del
                80% de tu salario del periodo en el que corresponda (semanal,
                bisemanal, quincenal o mensual).
              </p>
              <p>
                Podrás solicitar la proporción disponible de tu salario
                trabajado en cualquier momento y cualquier día de la semana. Los
                montos solicitados como acceso al salario trabajado a través de
                MOX, serán depositados en la cuenta bancaria que indiques a MOX
                a través de la plataforma de MOX, siendo esto tu entera
                responsabilidad.
              </p>
              <p>
                Para efectos de lo establecido en el párrafo anterior se estará
                a lo siguiente:
              </p>
              <p>
                <b> Horarios para realizar solicitudes: </b> 24/7 con las
                siguientes restricciones: <br />
                <b> Lunes a viernes: </b> <br />
                Entre 8:00 am y 8:00 pm: Sin límite en el monto solicitado por
                el Cliente y depositado por MOX. Entre 8:01 pm y 7:59 am:
                $8,000.00 (ocho mil pesos 0/100 M.N.) como monto máximo
                disponible para solicitar por el Cliente y depósito de MOX.
                <br />
                <b> Sábados, domingos y días inhábiles: </b>
                <br />
                En cualquier horario: $8,000.00 (ocho mil pesos 0/100 M.N.) como
                monto máximo disponible para solicitar por el Cliente y depósito
                de MOX.
              </p>
              <p>
                Mediante tu aceptación a los presentes Términos y Condiciones,
                liberas a MOX y a tu empleador de cualquier responsabilidad
                respecto del pago de tu salario, reconociendo que cualquier
                disposición de este que realices a través de MOX será
                considerada parte de tu salario, por lo que renuncias a reclamar
                la falta de pago del mismo, reconociendo que se entiende como
                pagado directamente a ti por tu empleador.
              </p>
              <br />
              <h4>VI. COSTO/COMISIÓN DEL SERVICIO</h4>
              <p>
                Por la prestación de los Servicios por parte de MOX en favor del
                Usuario, este último deberá, en cada ocasión, pagar la Comisión
                que quede establecida/informada en la Aplicación para
                conocimiento del Usuario, cuyo monto será determinado por MOX a
                su exclusivo arbitrio.
              </p>
              <p>
                Lo anterior se efectuará a través de las instrucciones
                irrevocables de pago que al efecto se girarán a través de la
                Aplicación a nombre del Usuario y dirigidas a la Empresa
                Afiliada en la cual labora o presta sus servicios, cada vez que
                el Usuario solicite disposición de Montos Retirados,
                instrucciones que le llegarán directamente a la Empresa
                Afiliada. Las instrucciones antes referidas incluirán la
                instrucción a la Empresa Afiliada que corresponda de realizar el
                reembolso a MOX de las cantidades que el Usuario hubiere
                dispuesto a través de la Aplicación como Montos Retirados, así
                como el pago de las Comisiones correspondientes que hubieren
                resultado por el número de disposiciones de los Montos Retirados
                realizados por el Usuario durante el periodo correspondiente.
              </p>
              <p>
                Los reembolsos y pagos a realizarse por la Empresa Afiliada en
                favor de MOX de conformidad con lo dispuesto por el párrafo
                inmediato anterior, los realizará la Empresa Afiliada en nombre,
                representación y a cuenta del Usuario que corresponda, haciendo
                uso de los montos originalmente pagaderos por la Empresa
                Afiliada al Usuario con motivo de la relación laboral o
                comercial existente entre el Usuario y la Empresa Afiliada. En
                dicho tenor, una vez realizados los reembolsos y pagos por parte
                de la Empresa Afiliada, pagará al Usuario los montos remanentes
                en el periodo de pago de nómina o pago de contraprestación que
                corresponda.
              </p>
              <p>
                La Comisión por los Servicios podrá ser pagada por la Empresa
                Afiliada para la cual labora o presta sus servicios el Usuario,
                con fondos propios de la Empresa Afiliada, en caso de que la
                Empresa Afiliada correspondiente así lo haya pactado en el
                Convenio de Colaboración que hubiere suscrito con MOX, en cuyo
                caso el Usuario no estará obligado a pagar a MOX la Comisión por
                los Servicios, y únicamente girará instrucción a la Empresa
                Afiliada a través de la Aplicación, cada vez que el Usuario
                solicite Montos Retirados a través de la Aplicación.
              </p>
              <p>
                MOX podrá cobrar a los Usuarios las cantidades de las que los
                Usuarios hubieren dispuesto a través de la Aplicación como
                Montos Retirados, Comisiones correspondientes que hubieren
                resultado por la prestación de los Servicios y demás conceptos
                que correspondan a MOX por la prestación de los Servicios, así
                como daños y perjuicios, mediante otras formas de cobro y pago,
                como lo son de manera enunciativa y no limitativa, cobro directo
                al Usuario, pagos domiciliados o cargos recurrentes a tarjetas
                de crédito, débito o nómina del Usuario (incluyendo la Cuenta
                Ordenante), CoDi (Cobro Digital BANXICO), u otros medios que MOX
                estime convenientes, sin perjuicio de cualesquier otros medios
                previstos por la legislación aplicable.
              </p>
              <br />
              <h4>VII. RELACIÓN LABORAL</h4>
              <p>
                Mediante tu aceptación de los presente Términos y Condiciones,
                reconoces que MOX es responsable únicamente por lo que respecta
                a las solicitudes de salario trabajado que realices en MOX y
                que, en lo que respecta a tu relación laboral con tu empleador,
                este será el único responsable del cumplimiento de las
                obligaciones obrero-patronales existentes entre tú y este, por
                lo que liberas a MOX de cualquier controversia judicial o
                extrajudicial que pudiera surgir en materia laboral.
              </p>
              <br />
              <h4>VIII. PÁGINA WEB Y APPS</h4>
              <p>
                La información mostrada en MOX y, en general, en cualquier
                plataforma digital de MOX es meramente con fines informativos.
                El material que se encuentra ahí y en estos Términos, está
                sujeto a cambios sin previo aviso, que estarán visibles en todo
                momento en la plataforma de MOX con la última fecha de
                actualización señalada.
              </p>
              <p>
                El acceso a los servicios ofrecidos en MOX puede ser limitado o
                lento, o verse afectado debido a una serie de factores. como lo
                son:
              </p>
              <p>
                Servidores, redes, fallas en el hardware (incluida tu propia
                computadora), líneas y conexiones de telecomunicaciones y otros
                equipos electrónicos y mecánicos; falla del software, que
                incluye, entre otras cosas, errores, virus, problemas de
                configuración, incompatibilidad de sistemas, utilidades o
                aplicaciones, el funcionamiento de cortafuegos o programas de
                detección, códigos ilegibles o irregularidades dentro de
                documentos particulares u otro contenido; sobrecarga de
                capacidades del sistema; daños causados por clima severo,
                terremotos, guerras, insurrecciones, disturbios, conmociones
                civiles, hechos fortuitos, accidentes, incendios, daños por
                agua, explosiones, averías mecánicas o desastres naturales;
                interrupción (ya sea parcial o total) de fuentes de alimentación
                u otra utilidad del servicio; huelga u otra detención (ya sea
                parcial o total) del trabajo; restricciones gubernamentales o
                regulatorias, resoluciones cambiarías, órdenes judiciales u
                otras formas de intervención humana; o cualquier otra causa (ya
                sea similar o diferente a cualquiera de las anteriores) que sea
                ajena al control de MOX.
              </p>
              <p>
                Podrán mostrarse enlaces a una página diferente a MOX, que se
                proporcionan únicamente como indicadores de información en temas
                que podrían ser útiles a usuarios de MOX. En este sentido, MOX
                no tiene el control del contenido en dichas páginas, por lo que
                MOX no garantiza el contenido en estas, incluida la precisión,
                integridad y confiabilidad de los sitios, así como que dicho
                contenido se encuentre libre de reclamos de derechos de autor,
                marcas registradas u otras infracciones relacionadas a los
                derechos de un tercero o a que dicho contenido esté libre de
                virus o alguna otra contaminación.
              </p>
              <p>
                Si decides seguir el enlace a un sitio web no controlado por
                MOX, debes hacerlo bajo tu propio riesgo. MOX no garantiza la
                autenticidad de los documentos de Internet. Los enlaces de
                páginas web que no sean controladas por MOX no implican ninguna
                responsabilidad por las opiniones, ideas, productos, información
                o servicios ofrecidos en dichos sitios, ni ninguna
                representación referente al contenido de los mismos.
              </p>
              <br />
              <h4>IX. PROPIEDAD INTELECTUAL</h4>
              <p>
                MOX y, en general, todas aquellas marcas de su propiedad son
                Marcas Registradas, protegidas por la Ley de la Propiedad
                Industrial tanto en México como en el extranjero según las leyes
                aplicables. La utilización, difusión, exhibición, explotación,
                comercialización o cualquier otro uso, sea parcial o total, de
                forma idéntica o que confunda en menor o mayor grado; sea por
                cualquier medio, incluyendo mas no limitándose al impreso,
                magnético, óptico, electrónico o informático, está expresamente
                prohibido sin previa autorización por escrito del titular de los
                derechos de autor y/o marca correspondiente; que en el caso
                concreto es MOX. Cualquier contravención a lo anteriormente
                expuesto o la legislación aplicable en materia de propiedad
                intelectual, industrial y derechos de autor será considerada y
                perseguida como un delito penal de comisión directa.
              </p>
              <p>
                El logotipo, diseños, formas, marcas nominativas, innominadas y
                mixtas de MOX así como cualquier material estático o interactivo
                incluido en la plataforma de MOX, está debidamente registrado
                ante las autoridades competentes y son propiedad de MOX. Los
                derechos de propiedad intelectual correspondientes a los
                productos y servicios ofrecidos por MOX, así como los materiales
                distintivos y dominios contenidos en estos, los derechos de uso
                y explotación correspondientes, mismos que incluyen mas no se
                limitan a su publicación, reproducción, divulgación,
                transformación y distribución son propiedad exclusiva de MOX. El
                Cliente no adquirirá bajo ninguna circunstancia concesión o
                derecho alguno sobre la propiedad intelectual e industrial de
                MOX por el mero uso de la plataforma MOX y/o de cualesquier
                otros productos y servicios ofrecidos por MOX; por lo tanto, su
                uso no podrá ser considerado como una autorización tácita o
                expresa para utilizar alguno de los elementos de la propiedad
                intelectual o de derecho de autor de MOX con algún fin diverso a
                los contemplados por el presente documento.
              </p>
              <br />
              <h4>X. CONSENTIMIENTO</h4>
              <p>
                Mediante la aceptación de los presentes Términos y Condiciones,
                manifiestas que la relación contractual que se puede llegar a
                generar por el uso de MOX, está dada en virtud de la relación
                contractual existente entre MOX y tu empleador y consiste en una
                prestación que tu empleador ofrece en virtud de la relación
                laboral existente entre tú y este.
              </p>
              <p>
                En virtud de las condiciones de capacidad legal establecidas en
                la legislación mexicana vigente y de la validez de la
                manifestación expresa de voluntad a través de medios
                electrónicos establecida en los artículos 89 y 90 del Código de
                Comercio, como Cliente al momento de la creación de tu Cuenta de
                Usuario, así como cada que haces una solicitud de salario
                trabajado en MOX, manifiestas expresamente tu consentimiento y
                contar con la capacidad suficiente para celebrar contratos que
                se pueden o pudieren llegar a realizar accediendo y usando MOX.
                En este sentido, la aceptación de los presentes Términos y
                Condiciones, es el medio por el que manifiestan el
                consentimiento expreso de someterse a los mismos.
              </p>
              <br />
              <h4>XI. INDEMNIZACIÓN</h4>
              <p>
                Te comprometes a indemnizar y mantener indemne a MOX, sus
                filiales, empresas controladas y/o controlantes, directivos,
                administradores, representantes y empleados, por cualquier
                reclamo o demanda de otros Clientes y/o usuarios, o terceros por
                sus actividades en MOX o por su incumplimiento de estos Términos
                y Condiciones, y demás políticas que se entienden incorporadas
                al presente o por la violación de cualesquiera leyes o derechos
                de terceros, incluyendo los honorarios de abogados en una
                cantidad razonable.
              </p>
              <br />
              <h4>XII. CONSULTAS, ACLARACIONES, RECLAMACIONES Y OTROS.</h4>
              <p>
                Para consultas, aclaraciones y reclamaciones, entre otros,
                vinculadas con MOX y con la finalidad de brindarte un mejor
                servicio, MOX pone a su disposición la dirección de correo
                electrónico <b> contacto@mox.cash </b> a través de la cual
                podrás hacérnoslas llegar.
              </p>
              <p>
                Se fija como domicilio de MOX el ubicado en San Pedro Garza
                García, Nuevo León, México.
              </p>
              <br />
              <h4>XIII. DOMICILIO Y LEGISLACIÓN APLICABLE</h4>
              <p>
                Para lo no previsto en estos Términos y Condiciones, acuerdas
                someterte a las leyes aplicables de los Estados Unidos
                Mexicanos.
              </p>
              <p>
                Para la interpretación y ejecución de los presentes Términos y
                Condiciones, aceptas someterse a la jurisdicción y competencia
                de los tribunales competentes de San Pedro Garza García, Nuevo
                León, renunciando expresamente al fuero que pudiese
                corresponderle por razón de su domicilio presente o futuro.
              </p>
              <p>
                <b>Fecha de actualización: Diciembre 2021</b>
              </p>
            </WrapperConditions>
            <ButtonContainer>
              <StyledButton
                type="button"
                variant={VariantType.secondary}
                onClick={() => setStep(2)}
              >
                Atrás
              </StyledButton>

              <StyledButton type="submit" variant={VariantType.primary}>
                Aceptar
              </StyledButton>
            </ButtonContainer>
          </>
        </StyledForm>
      )}
    </Formik>
  )
}

export default TermsConditions
