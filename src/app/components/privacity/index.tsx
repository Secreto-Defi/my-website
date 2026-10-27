import React from "react";

// Datos del responsable. Rellena nombre completo, NIF y domicilio para que
// aparezcan en la política (las líneas vacías no se muestran).
const TITULAR = {
  nombre: "Marc",
  marca: "Secreto Defi",
  nif: "",
  domicilio: "",
  email: "info@secretodefi.com",
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h3 className="font-semibold uppercase">{title}</h3>
    {children}
  </section>
);

export const Privacity = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-light">
        Esta política explica cómo se tratan los datos personales de las
        personas que usan el sitio web www.secretodefi.com, de acuerdo con el
        Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018, de 5 de
        diciembre, de Protección de Datos Personales y garantía de los derechos
        digitales (LOPDGDD) y la Ley 34/2002, de servicios de la sociedad de la
        información. El uso de esta web implica que has leído esta política.
      </p>

      <Section title="1. Responsable del tratamiento">
        <ul className="font-light flex flex-col gap-1">
          <li>Responsable: {TITULAR.nombre}</li>
          <li>Marca comercial: {TITULAR.marca}</li>
          {TITULAR.nif && <li>NIF: {TITULAR.nif}</li>}
          {TITULAR.domicilio && <li>Domicilio: {TITULAR.domicilio}</li>}
          <li>
            Correo electrónico de contacto:{" "}
            <a className="link link-primary" href={`mailto:${TITULAR.email}`}>
              {TITULAR.email}
            </a>
          </li>
        </ul>
      </Section>

      <Section title="2. Qué datos tratamos, para qué y con qué base legal">
        <ul className="font-light flex flex-col gap-3 list-disc pl-5">
          <li>
            <span className="font-semibold">Formulario de asesoría.</span> Datos:
            nombre o nick, usuario de Telegram y el texto con tus dudas y
            necesidades. Finalidad: atender tu solicitud, preparar la sesión y
            ponernos en contacto contigo. Base legal: tu consentimiento
            (art. 6.1.a RGPD) y, si contratas el servicio, la ejecución del
            contrato (art. 6.1.b RGPD).
          </li>
          <li>
            <span className="font-semibold">Correo electrónico.</span> Si nos
            escribes, usaremos tu dirección y el contenido del mensaje solo
            para responderte. Base legal: tu consentimiento (art. 6.1.a RGPD).
          </li>
          <li>
            <span className="font-semibold">Estadísticas de visitas.</span> La
            web usa Vercel Web Analytics, que mide páginas vistas de forma
            agregada y anónima, sin cookies de terceros y sin identificarte
            personalmente. Base legal: interés legítimo en conocer el uso de la
            web y mejorarla (art. 6.1.f RGPD).
          </li>
        </ul>
        <p className="font-light">
          No tomamos decisiones automatizadas ni elaboramos perfiles con tus
          datos.
        </p>
      </Section>

      <Section title="3. Destinatarios y proveedores">
        <p className="font-light">
          No cedemos tus datos a terceros, salvo obligación legal. Para prestar
          el servicio recurrimos a proveedores que actúan como encargados del
          tratamiento: el servicio de formularios (Formspree) y el alojamiento
          y estadísticas de la web (Vercel). Estos proveedores pueden tratar
          datos fuera del Espacio Económico Europeo, por ejemplo en Estados
          Unidos, con las garantías que prevé el RGPD para las transferencias
          internacionales.
        </p>
        <p className="font-light">
          Si te suscribes a La Agenda de SecretoDefi, la suscripción se
          gestiona en Substack, que trata tus datos conforme a su propia
          política de privacidad.
        </p>
      </Section>

      <Section title="4. Cuánto tiempo conservamos tus datos">
        <p className="font-light">
          Si no llegas a contratar ningún servicio, eliminamos los datos de tu
          solicitud a los 15 días de responderte. Si contratas, los
          conservaremos mientras dure la relación y después, bloqueados, durante
          los plazos exigidos por la normativa fiscal, mercantil y contable.
          Puedes pedir que se supriman antes en cualquier momento.
        </p>
      </Section>

      <Section title="5. Tus derechos">
        <p className="font-light">
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad, y retirar tu
          consentimiento cuando quieras sin que afecte a lo ya tratado,
          escribiendo a{" "}
          <a className="link link-primary" href={`mailto:${TITULAR.email}`}>
            {TITULAR.email}
          </a>{" "}
          e indicando el derecho que quieres ejercer. Podemos pedirte que
          acredites tu identidad. Si consideras que no hemos tratado tus datos
          correctamente, puedes presentar una reclamación ante la Agencia
          Española de Protección de Datos (
          <a
            className="link link-primary"
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>
      </Section>

      <Section title="6. Cookies y enlaces a terceros">
        <p className="font-light">
          Esta web no utiliza cookies propias ni de terceros con fines
          publicitarios o de seguimiento. Contiene enlaces a X, Telegram,
          Substack, YouTube e Instagram, que son sitios de terceros con sus
          propias políticas de privacidad y cookies.
        </p>
      </Section>

      <Section title="7. Menores y seguridad">
        <p className="font-light">
          Los menores de 14 años no deben facilitar datos personales sin el
          consentimiento de sus padres o tutores. Aplicamos medidas técnicas y
          organizativas razonables para proteger los datos que nos facilitas.
        </p>
      </Section>

      <p className="font-light">
        Última actualización: octubre de 2026. Copyright © Secreto Defi |
        RESERVADOS TODOS LOS DERECHOS
      </p>
    </div>
  );
};

export default Privacity;
